import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
