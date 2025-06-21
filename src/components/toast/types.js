// Toast Type Definitions

// Available types of toast notifications
export const TOAST_TYPES = {
  SUCCESS: "success",       // Positive feedback
  ERROR: "error",           // Indicates a failure
  INFO: "info",             // Neutral informational message
  WARNING: "warning",       // Cautionary message
  ACTION: "action",         // Custom action-based toast
  LOADING: "loading",       // Indicates loading/spinner state
  PERSISTENT: "persistent", // Will not auto-dismiss
};

// Toast Position Options

// Positions on the screen where toasts can appear
export const TOAST_POSITIONS = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
  TOP_CENTER: "top-center",
  BOTTOM_CENTER: "bottom-center",
};

// Default Toast Configuration

export const DEFAULT_CONFIG = {
  position: TOAST_POSITIONS.TOP_RIGHT, // Where toasts appear by default
  maxToasts: 5,                         // Max number of toasts shown at once
  defaultDuration: 5000,               // Time in ms before toast auto-closes
  pauseOnHover: true,                  // Pause countdown on hover
  showProgress: true,                  // Show progress bar
  enableSounds: false,                 // Play sound when toast appears
  enableAnimations: true,             // Animate toast appearance/removal
};
