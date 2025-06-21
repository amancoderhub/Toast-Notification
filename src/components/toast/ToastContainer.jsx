import React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { useToast } from "./ToastProvider";
import { Toast } from "./Toast";

// ToastContainer renders all active toasts into a specific region using a portal.
export const ToastContainer = () => {
  const { toasts, config } = useToast();

  // Don’t render anything if no toasts are active
  if (toasts.length === 0) return null;

  // Map position configuration to Tailwind class names
  const getPositionClass = () => {
    const positions = {
      "top-right": "toast-position-top-right",
      "top-left": "toast-position-top-left",
      "bottom-right": "toast-position-bottom-right",
      "bottom-left": "toast-position-bottom-left",
      "top-center": "toast-position-top-center",
      "bottom-center": "toast-position-bottom-center",
    };

    return positions[config.position] || positions["top-right"];
  };

  // Reverse order for bottom-aligned toasts so new ones stack at the bottom
  const isBottomAligned = config.position.includes("bottom");
  const displayedToasts = isBottomAligned ? [...toasts].reverse() : toasts;

  // Render toasts into a portal (outside main React tree)
  return createPortal(
    <div
      role="region"
      aria-label="Notifications"
      className={cn(
        "fixed z-50 flex flex-col gap-2 pointer-events-none",
        getPositionClass(),
      )}
    >
      {displayedToasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} />
        </div>
      ))}
    </div>,
    document.body,
  );
};
