// src/components/EditUserDetailsModal.js
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const EditUserDetailsModal = ({ open, onClose, onSave, userDetails }) => {
  const [editedUserDetails, setEditedUserDetails] = useState({ ...userDetails });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedUserDetails);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Please update the details:</DialogContentText>
        <TextField
          label="First Name"
          name="firstName"
          value={editedUserDetails.firstName}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={editedUserDetails.lastName}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={editedUserDetails.age}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="City"
          name="city"
          value={editedUserDetails.city}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Country"
          name="country"
          value={editedUserDetails.country}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={editedUserDetails.weight}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Height (cm)"
          name="height"
          type="number"
          value={editedUserDetails.height}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Gender"
          name="gender"
          value={editedUserDetails.gender}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Pregnant"
          name="pregnant"
          select
          value={editedUserDetails.pregnant}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </TextField>
        <TextField
          label="Tobacco User"
          name="tobacco_user"
          select
          value={editedUserDetails.tobacco_user}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </TextField>
        <TextField
          label="Sexually Active"
          name="sexually_active"
          select
          value={editedUserDetails.sexually_active}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserDetailsModal;
