# Supabase Setup Guide for simplistic | studio

This guide will help you set up Supabase for your architecture website.

## Features Enabled

✅ **Database** - Key-value store for projects and contact messages
✅ **Edge Functions** - Backend API server

## Setup Steps

### 1. Test the Integration

#### Test Contact Form:
1. Go to your website's Contact section
2. Fill out the form with a test message
3. Submit the form
4. The message will be stored in Supabase

#### Add Projects Manually in Supabase:

**Step-by-Step Guide:**

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard/project/gzlbzfftxlifangugsbp
   - Navigate to **Table Editor** → **kv_store_548e39aa**

2. **Add a New Project:**
   - Click **Insert** → **Insert row**
   - Fill in the fields:
     - **key**: `project:{uuid}` (e.g., `project:123e4567-e89b-12d3-a456-426614174000`)
       - Generate a UUID online or use: https://www.uuidgenerator.net/
     - **value**: Click the JSON editor and paste this structure:
       ```json
       {
         "id": "123e4567-e89b-12d3-a456-426614174000",
         "title": "Modern Villa Design",
         "description": "A stunning minimalist villa featuring clean lines and natural materials. This project showcases our commitment to timeless architecture.",
         "imageUrl": "https://your-image-url.com/image.jpg",
         "category": "Architecture",
         "createdAt": "2026-01-25T12:00:00.000Z"
       }
       ```
   - Click **Save**

3. **Image URL Options:**
   - Use external image hosting (Imgur, Cloudinary, etc.)
   - Or upload to Supabase Storage and use the public URL
   - Make sure the URL is publicly accessible

4. **Verify:**
   - Visit your website's `/projects` page
   - Your new project should appear automatically

### 2. Monitoring & Debugging

All operations now include console logging. To view logs:

**Frontend (Browser Console):**
- Contact form submissions
- Project fetching
- Any errors

**Backend (Supabase Dashboard):**
1. Go to **Edge Functions** → **make-server-548e39aa**
2. Click **Logs** to view server-side logs
3. Look for any errors or successful operations

## API Endpoints

Your backend server is running at:
```
https://gzlbzfftxlifangugsbp.supabase.co/functions/v1/make-server-548e39aa
```

### Public Endpoints:
- `GET /projects` - Fetch all projects
- `POST /contact` - Submit contact form

## Database Structure

The key-value store uses these prefixes:

### Projects:
```javascript
Key: "project:{uuid}"  // Example: "project:123e4567-e89b-12d3-a456-426614174000"
Value: {
  id: "123e4567-e89b-12d3-a456-426614174000",  // Same as UUID in key
  title: "Project Title",                       // Required: 2-100 characters
  description: "Project description...",        // Required: 10-5000 characters
  imageUrl: "https://example.com/image.jpg",    // Required: Valid image URL
  category: "Architecture",                     // Optional: e.g., "Architecture", "Interior Design"
  createdAt: "2026-01-25T12:00:00.000Z"        // Required: ISO timestamp
}
```

**Example Project Entry:**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "title": "Minimalist Office Space",
  "description": "A contemporary office design featuring open spaces, natural lighting, and sustainable materials. The design emphasizes productivity and employee well-being through thoughtful spatial planning.",
  "imageUrl": "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "category": "Interior Design",
  "createdAt": "2026-01-25T10:30:00.000Z"
}
```

### Contact Messages:
```javascript
Key: "contact:{uuid}"
Value: {
  id: string,
  name: string,
  email: string,
  message: string,
  createdAt: ISO timestamp,
  read: boolean
}
```

## Security Notes

✅ **Anon Key** - Safe to use in frontend for public endpoints
✅ **Public Endpoints** - All endpoints are public and do not require authentication

## Troubleshooting

### Messages not being saved?
- Check browser console for error messages
- Verify the contact form submitted successfully (green success message)
- View Edge Function logs in Supabase Dashboard

### Projects not displaying?
- Check browser console for error messages
- Verify projects exist in the key-value store with correct key format (`project:{uuid}`)
- Ensure the `value` field is valid JSON
- Verify all required fields are present (id, title, description, imageUrl, createdAt)
- Check that `imageUrl` is a valid, publicly accessible URL
- View Edge Function logs in Supabase Dashboard
- Projects are sorted by `createdAt` date (newest first)

### How to Edit/Delete Projects:
- **Edit**: Go to Table Editor → Find the project row → Click Edit → Modify the `value` JSON → Save
- **Delete**: Go to Table Editor → Find the project row → Click Delete → Confirm

## Need Help?

If you encounter issues:
1. Open browser console (F12)
2. Try the operation again
3. Look for red error messages in console
4. Check Supabase Edge Function logs
5. All operations now log detailed information for debugging
