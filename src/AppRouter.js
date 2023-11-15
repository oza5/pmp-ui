// src/AppRouter.js
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideMenu from "./SideMenu";
import Details from "./pages/Details";
import DashBoard from "./pages/DashBoard";
import VaccinationInformation from "./pages/VaccinationInformation";
import HospitalsPage from "./pages/HospitalsPage";
import Login from "./pages/Login";
import Summary from "./pages/Summary";

const initialDetails = {
  firstName: "Osman",
  lastName: "Ali",
  age: 25,
  city: "New York",
  country: "USA",
  weight: 70, // Add weight in kilograms
  height: 180, // Add height in centimeters
  gender: "Male",
  pregnant: false,
  tobacco_user: false,
  sexually_active: true,
};
const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState(initialDetails);
  const handleLogin = () => {
    // Set the user as logged in
    setLoggedIn(true);
  };
  return (
    <Router>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="app-container">
          <SideMenu user={user} />

          <Routes>
            <Route
              path="/dashboard"
              element={<DashBoard user={user} setUser={setUser} />}
            />
            <Route path="/details/:itemId" element={<Details />} />
            <Route path="/vaccinations" element={<VaccinationInformation />} />
            <Route path="/hospitals" element={<HospitalsPage />} />
            <Route path="/" element={<Summary />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default AppRouter;
