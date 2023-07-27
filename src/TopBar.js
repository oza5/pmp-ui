// src/TopBar.js
import React from 'react';

const TopBar = ({ username }) => {
  return (
    <div className="top-bar">
      <span>Welcome, {username}!</span>
    </div>
  );
};

export default TopBar;
