// src/AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SideMenu from './SideMenu';
import Details from './pages/Details';
import DashBoard from './pages/DashBoard';
import VaccinationInformation from './pages/VaccinationInformation';
import HospitalsPage from './pages/HospitalsPage';
import Login from './pages/Login';


const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <SideMenu/>
        <Routes>
          <Route path="/" element={<DashBoard/>} />
          <Route path="/details/:itemId" element={<Details/>} />
          <Route path="/vaccinations" element={<VaccinationInformation/>} />
          <Route path="/hospitals" element={<HospitalsPage/>} />
        </Routes>
      </div>)}
    </Router>
  );
};

export default AppRouter;
