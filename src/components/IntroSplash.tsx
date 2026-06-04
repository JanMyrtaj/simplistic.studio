import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface IntroSplashProps {
  onComplete: () => void;
  isDark: boolean;
}

export function IntroSplash({ onComplete, isDark }: IntroSplashProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Auto-complete after animation finishes
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600); // Wait for fade out
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDark ? "bg-neutral-900" : "bg-neutral-50"
      }`}
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Animated background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 2] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.3,
            }}
            className={`absolute inset-0 blur-3xl rounded-full ${
              isDark ? "bg-neutral-100" : "bg-neutral-900"
            }`}
            style={{ transform: "translate(-50%, -50%) scale(2)" }}
          />

          {/* Logo Text */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
         
             <h1
            className={`text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[14rem] font-light tracking-tight leading-[0.9] ${
            isDark ? "text-neutral-100" : "text-neutral-900"
            }`}
            >
              simplistic
            </h1>
            </motion.div>

            <div className="relative w-full min-h-[3cm] sm:min-h-[3.5cm] md:min-h-[4cm]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                className={`absolute left-0 top-[1.75cm] sm:top-[2cm] md:top-[2.25cm] -translate-y-1/2 h-px md:h-0.5 ${
                  isDark ? "bg-neutral-100" : "bg-neutral-900"
                }`}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <p
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] md:tracking-[0.35em] text-center ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                STUDIO
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated dots/loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex gap-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className={`w-2 h-2 rounded-full ${
                isDark ? "bg-neutral-400" : "bg-neutral-600"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
