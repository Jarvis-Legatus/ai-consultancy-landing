"use client";

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white font-bold p-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-y-[-10px]"
        aria-label="Scroll to top"
      >
        &uarr;
      </button>
    </div>
  );
};

export default ScrollToTopButton;