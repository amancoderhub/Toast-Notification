import React, { useEffect, useState } from "react";
import {
  X,
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  Undo,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "./ToastProvider";

// Utility: Return the appropriate icon based on toast type
const getIcon = (type) => {
  const baseClass = "h-5 w-5";
  switch (type) {
    case "success":
      return <CheckCircle className={baseClass} />;
    case "error":
      return <XCircle className={baseClass} />;
    case "warning":
      return <AlertTriangle className={baseClass} />;
    case "loading":
      return <Loader2 className={`${baseClass} animate-spin`} />;
    default:
      return <Info className={baseClass} />;
  }
};

// Utility: Get Tailwind class string for styling based on type
const getStyle = (type) => {
  const base = "border";
  switch (type) {
    case "success":
      return `${base} bg-toast-success text-toast-success-foreground border-toast-success/20`;
    case "error":
      return `${base} bg-toast-error text-toast-error-foreground border-toast-error/20`;
    case "warning":
      return `${base} bg-toast-warning text-toast-warning-foreground border-toast-warning/20`;
    case "info":
      return `${base} bg-toast-info text-toast-info-foreground border-toast-info/20`;
    case "action":
      return `${base} bg-toast-action text-toast-action-foreground border-toast-action/20`;
    case "loading":
      return `${base} bg-toast-loading text-toast-loading-foreground border-toast-loading/20`;
    case "persistent":
      return `${base} bg-toast-persistent text-toast-persistent-foreground border-toast-persistent/20`;
    default:
      return `${base} bg-card text-card-foreground border-border`;
  }
};

// Utility: Return animation class based on position and exit state
const getAnimation = (position, isExiting) => {
  const dir = position.includes("right")
    ? "right"
    : position.includes("left")
    ? "left"
    : position.includes("top")
    ? "top"
    : "bottom";

  return isExiting
    ? `animate-toast-slide-out-${dir}`
    : `animate-toast-slide-in-${dir}`;
};

// Main Toast Component
export const Toast = ({ toast }) => {
  const { removeToast, pauseToast, resumeToast, config } = useToast();
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const autoDismiss = !toast.persistent && toast.duration;

  // Animate progress bar countdown
  useEffect(() => {
    if (!autoDismiss || !toast.showProgress || isPaused || toast.isExiting) return;

    const start = Date.now();
    const duration = toast.duration;

    const update = () => {
      const elapsed = Date.now() - start;
      const percent = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(percent);
      if (percent > 0) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [autoDismiss, toast.showProgress, toast.duration, isPaused, toast.isExiting]);

  // Event Handlers
  const pause = () => {
    if (toast.pauseOnHover && !toast.persistent) {
      setIsPaused(true);
      pauseToast(toast.id);
    }
  };

  const resume = () => {
    if (toast.pauseOnHover && !toast.persistent) {
      setIsPaused(false);
      resumeToast(toast.id);
    }
  };

  const dismiss = () => removeToast(toast.id);
  const handleUndo = () => {
    toast.undoAction?.();
    dismiss();
  };

  return (
    <div
      role="alert"
      tabIndex={0}
      aria-live="polite"
      aria-atomic="true"
      onKeyDown={(e) => e.key === "Escape" && dismiss()}
      onMouseEnter={pause}
      onMouseLeave={resume}
      className={cn(
        "relative flex items-start gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "min-w-[300px] max-w-[400px]",
        getStyle(toast.type),
        config.enableAnimations && getAnimation(config.position, toast.isExiting),
        toast.isExiting && "opacity-0 scale-95"
      )}
    >
      {/* Progress bar */}
      {toast.showProgress && autoDismiss && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b-lg transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      )}

      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">{getIcon(toast.type)}</div>

      {/* Message content */}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <div className="font-semibold text-sm mb-1">{toast.title}</div>
        )}
        <div className="text-sm opacity-90">{toast.message}</div>

        {/* Actions */}
        {(toast.action || toast.undoAction) && (
          <div className="flex gap-2 mt-3">
            {toast.action && (
              <button
                onClick={toast.action.onClick}
                className="text-xs font-medium underline hover:no-underline transition-all"
              >
                {toast.action.label}
              </button>
            )}
            {toast.undoAction && (
              <button
                onClick={handleUndo}
                className="flex items-center gap-1 text-xs font-medium underline hover:no-underline transition-all"
              >
                <Undo className="h-3 w-3" />
                Undo
              </button>
            )}
          </div>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={dismiss}
        className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
