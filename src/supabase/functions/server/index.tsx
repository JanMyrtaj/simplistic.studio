import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Simple rate limiting (in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  createdAt: string;
}


function getRateLimitKey(c: { req: { header: (name: string) => string | undefined } }): string {
  const forwarded = c.req.header("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function checkRateLimit(c: { req: { header: (name: string) => string | undefined } }): boolean {
  const key = getRateLimitKey(c);
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Rate limit map auto-cleans on cold starts (serverless environment)

// Enable logger (only in development)
if (Deno.env.get("ENVIRONMENT") !== "production") {
  app.use('*', logger(console.log));
}

// Enable CORS
app.use(
  "/*",
  cors({
    origin: "*", // For production, restrict to your domain: ["https://yourdomain.com"]
    allowHeaders: ["Content-Type"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    maxAge: 600,
  }),
);

// Security headers middleware
app.use("*", async (c, next) => {
  await next();
  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
  c.header("X-XSS-Protection", "1; mode=block");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
});

// Rate limiting middleware
app.use("*", async (c, next) => {
  if (!checkRateLimit(c)) {
    return c.json({ error: "Too many requests. Please try again later." }, 429);
  }
  await next();
});

// Health check endpoint
app.get("/make-server-548e39aa/health", (c) => {
  return c.json({ status: "ok" });
});

// Input validation helpers
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function sanitizeString(str: string, maxLength: number): string {
  return str.trim().slice(0, maxLength);
}

// Get all projects endpoint
app.get("/make-server-548e39aa/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project:");
    
    const validProjects = projects.filter((p: unknown): p is Project => 
      p !== null &&
      typeof p === 'object' && 
      'id' in p && typeof (p as Project).id === 'string' &&
      'title' in p && typeof (p as Project).title === 'string' &&
      'imageUrl' in p && typeof (p as Project).imageUrl === 'string' &&
      'createdAt' in p && typeof (p as Project).createdAt === 'string'
    );
    
    const sortedProjects = validProjects.sort((a: Project, b: Project) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return c.json({ projects: sortedProjects });
  } catch (error) {
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

// Submit contact message endpoint
app.post("/make-server-548e39aa/contact", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate input exists
    if (!body || typeof body !== 'object') {
      return c.json({ error: "Invalid request body" }, 400);
    }

    let { name, email, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: "Name, email, and message are required" }, 400);
    }

    name = sanitizeString(String(name), 100);
    email = sanitizeString(String(email), 254);
    message = sanitizeString(String(message), 5000);

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      return c.json({ error: "All fields must contain valid content" }, 400);
    }

    if (!isValidEmail(email)) {
      return c.json({ error: "Invalid email address" }, 400);
    }

    if (name.length < 2 || name.length > 100) {
      return c.json({ error: "Name must be between 2 and 100 characters" }, 400);
    }

    if (message.length < 10 || message.length > 5000) {
      return c.json({ error: "Message must be between 10 and 5000 characters" }, 400);
    }

    const messageId = crypto.randomUUID();
    await kv.set(`contact:${messageId}`, {
      id: messageId,
      name,
      email: email.toLowerCase(),
      message,
      createdAt: new Date().toISOString(),
      read: false,
    });

    return c.json({ message: "Message sent successfully" });
  } catch (error) {
    return c.json({ error: "Failed to send message" }, 500);
  }
});

Deno.serve(app.fetch);