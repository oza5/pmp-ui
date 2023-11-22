// src/AppRouter.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideMenu from "./SideMenu";
import Details from "./pages/Details";
import DashBoard from "./pages/DashBoard";
import VaccinationInformation from "./pages/VaccinationInformation";
import HospitalsPage from "./pages/HospitalsPage";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

const AppRouter = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const newToken = localStorage.getItem("token");
    if (newToken !== token) {
      setToken(newToken);
    }
  }, [token]);
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (token) {
        try {
          const response = await fetch(
            "http://localhost:8000/api/user-details/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
              },
            },
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }

          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [token]);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          {loggedIn ? (
            <>
              <Route
                path="/dashboard"
                element={<DashBoard user={user} setUser={setUser} />}
              />
              <Route path="/details/:itemId" element={<Details />} />
              <Route
                path="/vaccinations"
                element={<VaccinationInformation />}
              />
              <Route path="/hospitals" element={<HospitalsPage />} />
              <Route path="/" element={<Summary />} />
            </>
          ) : (
            <Route
              path="*"
              element={<Login setToken={setToken} onLogin={handleLogin} />}
            />
          )}
        </Routes>
        {loggedIn && (
          <div className="app-container">
            <SideMenu user={user} />
            <Logout setToken={setToken} onLogout={handleLogout} />
          </div>
        )}
      </Router>
    </div>
  );
};

export default AppRouter;
