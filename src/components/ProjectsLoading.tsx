import { motion } from "motion/react";  
import React from "react";

interface PageLoaderProps {
  isDark: boolean;
}

export function PageLoader({ isDark }: PageLoaderProps) {
  const bg = isDark ? "bg-neutral-900" : "bg-neutral-50";
  const letterColor = isDark ? "#e5e5e5" : "#171717";
  const sColor = isDark ? "#f5f5f5" : "#171717";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${bg}`}
    >
      <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
        {/* Big S in the center */}
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute select-none font-light"
          style={{
            fontSize: "6rem",
            fontFamily: "system-ui, -apple-system, sans-serif",
            color: sColor,
            lineHeight: 1,
          }}
        >
          S
        </motion.span>

        {/* Orbiting word container — rotates the whole orbit */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center center" }}
        >
          {/* Word always faces the S — no counter-rotation, initial 90deg so it reads inward */}
          <span
            className="absolute select-none font-light"
            style={{
              left: "50%",
              top: "8px",
              transform: "translateX(-50%) rotate(-90deg)",
              fontSize: "1rem",
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: letterColor,
              letterSpacing: "0.25em",
              whiteSpace: "nowrap",
            }}
          >
            implistic
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
