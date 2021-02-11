import React from 'react';

const Dropdown = ({ children, className }) => {
  return (
    <ul
      className={`hidden absolute border dropdown-menu border-gray-100 bg-white right-1 mt-1 z-10 ${className} shadow`}
    >
      {children}
    </ul>
  );
};

export default Dropdown;
