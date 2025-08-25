import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-600"></div>
        <div className="absolute top-0 left-0 animate-spin rounded-full h-16 w-16 border-r-4 border-primary-400 animation-delay-150"></div>
        <div className="absolute top-0 left-0 animate-spin rounded-full h-16 w-16 border-b-4 border-primary-300 animation-delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
