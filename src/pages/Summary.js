import React from "react";
import { Link } from "react-router-dom";
import "../summary.css";

const Summary = () => {
  const greeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  return (
    <div className="page-container">
      <div style={{ textAlign: "center" }}>
        <h2>{greeting()}</h2>
      </div>
      <div className="tiles-container">
        <Link to="/dashBoard">
          <div className="tile">
            <h2>Start Screening</h2>
            {/* Add content or styling for the first tile */}
          </div>
        </Link>

        <Link to="/vaccinations">
          <div className="tile">
            <h2>My Vaccinations</h2>
            {/* Add content or styling for the second tile */}
          </div>
        </Link>

        <Link to="/hospitals">
          <div className="tile">
            <h2>Hospitals</h2>
            {/* Add content or styling for the third tile */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
