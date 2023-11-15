// src/components/AddRecordModal.js
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddVaccinations = ({ open, onClose, onSave }) => {
  const [vaccine, setVaccine] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    onSave({ vaccine, date, location });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Vaccination Record</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter the details:</DialogContentText>
        <TextField
          autoFocus
          label="Vaccine"
          value={vaccine}
          onChange={(e) => setVaccine(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          margin="dense"
        />
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

export default AddVaccinations;
