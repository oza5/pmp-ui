// src/pages/DashBoard.js
import React, { useState } from 'react';
import { Typography, Avatar,Button, CircularProgress } from '@mui/material';
import Tables from './Tables';
import EditUserDetailsModal from '../components/EditUserDetailsModal';


const DashBoard = ({user,setUser}) => {
  console.log(user)
  const { firstName, lastName, age, city, country, weight, height, gender, pregnant, tobacco_user, sexually_active } = user;
  const [showScreening, setShowScreening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  // Function to get user initials
  const getInitials = (firstName, lastName) => {
    return firstName.charAt(0) + lastName.charAt(0);
  };
  const handleShowScreening = () => {
    setIsLoading(true); // Set loading state to true when the button is clicked
    setShowScreening(!showScreening);
    !showScreening?setTimeout(() => {
      setIsLoading(false); // Simulate loading time and set loading state to false
    }, 1000):setIsLoading(false); // Simulated loading time: 2000 milliseconds (2 seconds)
  };
  const handleEditDetails = () => {
    setEditModalOpen(true);
  };

  const handleSaveUserDetails = (updatedUserDetails) => {
    setUser(updatedUserDetails);
  };
  return (
    
    <div className="page-container">
      <div style={{ textAlign: 'center' }}>
     <h2>Health Dashboard</h2>
     </div>
      <div className="page-container">
      <div className="user-details-container">
        <Avatar sx={{ width: 120, height: 120, fontSize: 60 }}>{getInitials(firstName, lastName)}</Avatar>
        <div className="user-details">
          <Typography variant="h6">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body1">
            Age: {age}
          </Typography>
          <Typography variant="body1">
            City: {city}
          </Typography>
          <Typography variant="body1">
            Country: {country}
          </Typography>
          <Typography variant="body1">
            Weight: {weight} kg
          </Typography>
          <Typography variant="body1">
            Height: {height} cm
          </Typography>
          <Typography variant="body1">
            Gender: {gender}
          </Typography>
          <Typography variant="body1">
            Pregnant: {pregnant ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
            Tobacco User: {tobacco_user ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body1">
            Sexually Active: {sexually_active ? 'Yes' : 'No'}
          </Typography>
        </div>
      </div>
      
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={handleShowScreening}>
          {showScreening?"Close Screening":"Start screening"}
        </Button>
        <Button variant="contained" onClick={handleEditDetails}>
          Edit Details
        </Button>
      </div>
      <div className="table-container">
      {isLoading ? ( // Conditionally render the loading spinner
          <div className="loading-spinner" align="center">
            <CircularProgress />
          </div>
        ) : (
          showScreening && <Tables />
        )}
        <EditUserDetailsModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveUserDetails}
        userDetails={user}
      />
      </div>
    </div>
  );
};

export default DashBoard;
