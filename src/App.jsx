import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/toast/ToastProvider";
import { ToastContainer } from "@/components/toast/ToastContainer";

// React Query for API caching and state management
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a new client instance for React Query
const queryClient = new QueryClient();

// Root App Component
const App = () => {
  return (
    // Provide React Query to the entire app
    <QueryClientProvider client={queryClient}>
      {/* Tooltip context provider for consistent tooltip behavior */}
      <TooltipProvider>
        {/* Custom Toast notification provider and UI container */}
        <ToastProvider>
          <ToastContainer />

          {/* Set up routing using React Router */}
          <BrowserRouter>
            <Routes>
              {/* Main page route */}
              <Route path="/" element={<Index />} />

              {/* Add any new routes above this line */}
              {/* Catch-all route for unmatched URLs */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
