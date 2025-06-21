import React from "react";
// A simple 404 Not Found page component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Main 404 Heading */}
        <h1 className="text-4xl font-bold text-foreground mb-4">
          404
        </h1>

        {/* Message below the heading */}
        <p className="text-muted-foreground mb-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Link to go back to the homepage */}
        <a href="/" className="text-primary hover:underline">
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
