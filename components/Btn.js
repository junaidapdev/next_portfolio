import React from "react";

const Btn = ({ children, className, onClick }) => {
    return (
      <div>
        <button
          className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  };
  
  export default Btn;
  