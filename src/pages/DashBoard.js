import { useState } from "react";
import { Typography, Avatar, Button, CircularProgress } from "@mui/material";

import Tables from "./Tables";
import EditUserDetailsModal from "../components/EditUserDetailsModal";
import ExportAsCSV from "../components/ExportAsCSV";

const DashBoard = ({ user, setUser }) => {
  const {
    full_name,
    age,
    weight,
    height,
    city,
    country,
    gender,
    pregnant,
    tobacco_user,
    sexually_active,
  } = user;
  const [showScreening, setShowScreening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const getInitials = (fullName) => {
    return fullName.charAt(0);
  };
  const handleShowScreening = () => {
    setIsLoading(true);
    setShowScreening(!showScreening);
    !showScreening
      ? setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      : setIsLoading(false);
  };
  const handleEditDetails = () => {
    setEditModalOpen(true);
  };

  const handleSaveUserDetails = (updatedUserDetails) => {
    setUser(updatedUserDetails);
  };
  return (
    <div className="page-container">
      <div style={{ textAlign: "center" }}>
        <h2>Health Dashboard</h2>
      </div>
      <div className="page-container">
        <div className="user-details-container">
          <Avatar sx={{ width: 120, height: 120, fontSize: 60 }}>
            {getInitials(full_name)}
          </Avatar>
          <div className="user-details">
            <Typography variant="h6">{full_name}</Typography>
            <Typography variant="body1">Age: {age}</Typography>
            <Typography variant="body1">City: {city}</Typography>
            <Typography variant="body1">Country: {country}</Typography>
            <Typography variant="body1">Weight: {weight} kg</Typography>
            <Typography variant="body1">Height: {height} cm</Typography>
            <Typography variant="body1">Gender: {gender}</Typography>
            <Typography variant="body1">
              Pregnant: {pregnant ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Tobacco User: {tobacco_user ? "Yes" : "No"}
            </Typography>
            <Typography variant="body1">
              Sexually Active: {sexually_active ? "Yes" : "No"}
            </Typography>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={handleShowScreening}>
          {showScreening ? "Close Screening" : "Start screening"}
        </Button>
        <Button variant="contained" onClick={handleEditDetails}>
          Edit Details
        </Button>
        <ExportAsCSV file_name={"dashBoard"} />
      </div>
      <div className="table-container">
        {isLoading ? ( // Conditionally render the loading spinner
          <div className="loading-spinner">
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
