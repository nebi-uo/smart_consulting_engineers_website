import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    }
  }, [isLoading]);

  const handleTransitionEnd = () => {
    if (!isLoading) {
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${
        isLoading 
          ? 'opacity-100 transition-none' 
          : 'opacity-0 transition-opacity duration-700 ease-in-out'
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="flex flex-col items-center w-full px-6">
        <img
          src="/mainlogo.svg"
          alt="Loading..."
          className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] h-auto animate-pulse"
        />
        <div className="mt-12 flex space-x-3">
          <div className="w-4 h-4 bg-primary-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-primary-blue rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-primary-blue rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
