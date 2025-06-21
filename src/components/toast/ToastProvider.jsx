import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { DEFAULT_CONFIG } from "./types";

// Create a context to hold the toast state and actions
const ToastContext = createContext(undefined);

// Hook to access the toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Reducer to handle all toast-related actions
const toastReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [
          action.payload,
          ...state.toasts.slice(0, state.config.maxToasts - 1),
        ],
      };

    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.payload.id),
        pausedToasts: new Set(
          [...state.pausedToasts].filter((id) => id !== action.payload.id),
        ),
      };

    case "CLEAR_ALL_TOASTS":
      return { ...state, toasts: [], pausedToasts: new Set() };

    case "UPDATE_CONFIG":
      return {
        ...state,
        config: { ...state.config, ...action.payload },
      };

    case "PAUSE_TOAST":
      return {
        ...state,
        pausedToasts: new Set([...state.pausedToasts, action.payload.id]),
      };

    case "RESUME_TOAST":
      return {
        ...state,
        pausedToasts: new Set(
          [...state.pausedToasts].filter((id) => id !== action.payload.id),
        ),
      };

    case "SET_EXITING":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.payload.id ? { ...t, isExiting: true } : t,
        ),
      };

    default:
      return state;
  }
};

// Main ToastProvider component
export const ToastProvider = ({ children, initialConfig = {} }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
    config: { ...DEFAULT_CONFIG, ...initialConfig },
    pausedToasts: new Set(),
  });

  // Unique ID generator for each toast
  const generateId = useCallback(() => {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Add a toast with merged config options
  const addToast = useCallback(
    (toastData) => {
      const id = generateId();

      const toast = {
        ...toastData,
        id,
        createdAt: Date.now(),
        duration: toastData.duration ?? state.config.defaultDuration,
        pauseOnHover: toastData.pauseOnHover ?? state.config.pauseOnHover,
        showProgress: toastData.showProgress ?? state.config.showProgress,
      };

      dispatch({ type: "ADD_TOAST", payload: toast });
      return id;
    },
    [generateId, state.config],
  );

  // Trigger exit animation before removing a toast
  const removeToast = useCallback((id) => {
    dispatch({ type: "SET_EXITING", payload: { id } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST", payload: { id } });
    }, 200);
  }, []);

  const clearAllToasts = useCallback(() => {
    dispatch({ type: "CLEAR_ALL_TOASTS" });
  }, []);

  const updateConfig = useCallback((config) => {
    dispatch({ type: "UPDATE_CONFIG", payload: config });
  }, []);

  const pauseToast = useCallback((id) => {
    dispatch({ type: "PAUSE_TOAST", payload: { id } });
  }, []);

  const resumeToast = useCallback((id) => {
    dispatch({ type: "RESUME_TOAST", payload: { id } });
  }, []);

  // Automatically remove non-persistent toasts after their duration
  useEffect(() => {
    const timeouts = new Map();

    state.toasts.forEach((toast) => {
      const shouldAutoRemove =
        !toast.persistent &&
        !state.pausedToasts.has(toast.id) &&
        !toast.isExiting;

      if (shouldAutoRemove) {
        const timeoutId = setTimeout(() => {
          removeToast(toast.id);
        }, toast.duration || state.config.defaultDuration);

        timeouts.set(toast.id, timeoutId);
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [
    state.toasts,
    state.pausedToasts,
    state.config.defaultDuration,
    removeToast,
  ]);

  const contextValue = {
    toasts: state.toasts,
    config: state.config,
    addToast,
    removeToast,
    clearAllToasts,
    updateConfig,
    pauseToast,
    resumeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
