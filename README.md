
# 🚀 Toast Notification Queue (React js + Tailwind)

A modern, accessible, and customizable toast notification system built with **React.js**, **Tailwind CSS**, and **ES6+ JavaScript**. This component is designed to be modular, responsive, and easy to integrate into any React application.

## ✨ Features

- ✅ **Queue System**: Toasts are queued and displayed in a stacked vertical layout.
- ⏱️ **Auto Dismiss**: Each toast automatically disappears after a set timeout.
- ✋ **Manual Dismiss**: Users can close toasts by clicking a close button.
- 🔔 **Toast Types**: Supports `success`, `error`, and `info` types with distinct styles.
- 💬 **Custom Message**: Each toast displays a custom message.
- 🎞️ **Animations**: Smooth enter and exit animations.
- 📍 **Positioning**: Configurable positions (e.g., top-right, bottom-left).
- ♿ **Accessibility**: ARIA roles and keyboard interaction support.
- 🛑 **Pause on Hover**: Auto-dismiss timer pauses on hover.
- 📊 **Progress Bar**: Visual indicator of remaining dismiss time.
- ↩️ **Undo Action**: Optional undo button for reversible actions.
- 🌗 **Dark/Light Theme**: Fully theme-aware with support for both light and dark modes.
- 📱 **Responsive Design**: Mobile-friendly and desktop-optimized.

---

## 🧱 Tech Stack

- [React.js](https://reactjs.org/) (Functional components & Hooks)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- No third-party toast libraries used
- ES6+ JavaScript

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## 🧩 Component Architecture

- `ToastProvider.jsx`: Handles state management and toast queue logic.
- `Toast.jsx`: Renders individual toast with props for type, message, timer, etc.
- `ToastContainer.jsx`: Manages position and animation for all toasts.
- `useToast.js`: Custom hook for dispatching toasts from anywhere in your app.

---

## 🔧 Usage

```jsx
import { useToast } from "@/components/toast/ToastProvider";

const ExampleComponent = () => {
  const { showToast } = useToast();

  return (
    <button
      onClick={() =>
        showToast({
          type: "success",
          message: "This is a success toast!",
          duration: 4000,
          undoAction: () => alert("Undo clicked!")
        })
      }
    >
      Show Toast
    </button>
  );
};

## 🧪 Customization

You can customize:
- Timeout duration
- Theme (dark/light)
- Toast position
- Toast appearance (via Tailwind)
- Animations

## 🧑‍💻 Developer Notes

- Modular and readable codebase
- Fully documented with clear inline comments
- All state management handled via React's built-in hooks
- No external toast libraries used

## 📞 Contact
For any inquiries, contact: [saurbhsrivastav6@gmail.com]
