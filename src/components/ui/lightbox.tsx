import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export function Lightbox({
  isOpen,
  onClose,
  imageUrl,
  imageAlt = "Image",
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={onClose}
        >
          {/* IMAGE CONTAINER (animated) — rendered first so controls paint on top */}
          <motion.div
            key={imageUrl}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[50vh] flex items-center justify-center"
            style={{ zIndex: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-w-full max-h-[50vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* CLOSE — top right corner of viewport */}
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              zIndex: 9999,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.4)",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* PREV — left side, vertically centered */}
          {onPrev && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              aria-label="Previous image"
              style={{
                position: "fixed",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2} />
            </button>
          )}

          {/* NEXT — right side, vertically centered */}
          {onNext && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              aria-label="Next image"
              style={{
                position: "fixed",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
