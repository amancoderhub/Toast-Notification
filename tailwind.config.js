/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        toast: {
          success: 'hsl(var(--toast-success))',
          'success-foreground': 'hsl(var(--toast-success-foreground))',
          error: 'hsl(var(--toast-error))',
          'error-foreground': 'hsl(var(--toast-error-foreground))',
          warning: 'hsl(var(--toast-warning))',
          'warning-foreground': 'hsl(var(--toast-warning-foreground))',
          info: 'hsl(var(--toast-info))',
          'info-foreground': 'hsl(var(--toast-info-foreground))',
          action: 'hsl(var(--toast-action))',
          'action-foreground': 'hsl(var(--toast-action-foreground))',
          loading: 'hsl(var(--toast-loading))',
          'loading-foreground': 'hsl(var(--toast-loading-foreground))',
          persistent: 'hsl(var(--toast-persistent))',
          'persistent-foreground': 'hsl(var(--toast-persistent-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'toast-slide-in-right': {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'toast-slide-in-left': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'toast-slide-in-top': {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'toast-slide-in-bottom': {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'toast-slide-out-right': {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(100%)', opacity: '0' },
        },
        'toast-slide-out-left': {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(-100%)', opacity: '0' },
        },
        'toast-slide-out-top': {
          from: { transform: 'translateY(0)', opacity: '1' },
          to: { transform: 'translateY(-100%)', opacity: '0' },
        },
        'toast-slide-out-bottom': {
          from: { transform: 'translateY(0)', opacity: '1' },
          to: { transform: 'translateY(100%)', opacity: '0' },
        },
        progress: {
          from: { width: '100%' },
          to: { width: '0%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'toast-slide-in-right': 'toast-slide-in-right 0.3s ease-out',
        'toast-slide-in-left': 'toast-slide-in-left 0.3s ease-out',
        'toast-slide-in-top': 'toast-slide-in-top 0.3s ease-out',
        'toast-slide-in-bottom': 'toast-slide-in-bottom 0.3s ease-out',
        'toast-slide-out-right': 'toast-slide-out-right 0.2s ease-in',
        'toast-slide-out-left': 'toast-slide-out-left 0.2s ease-in',
        'toast-slide-out-top': 'toast-slide-out-top 0.2s ease-in',
        'toast-slide-out-bottom': 'toast-slide-out-bottom 0.2s ease-in',
        progress: 'progress var(--duration, 5000ms) linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
