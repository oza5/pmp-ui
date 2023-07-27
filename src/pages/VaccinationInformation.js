// src/pages/VaccinationInformation.js
import React, { useState } from 'react';
import VaccinationTable from '../components/VaccinationTable';
import { Button } from '@mui/material';
import AddVaccinations from '../components/AddVaccinations';


const VaccinationInformation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [vaccinationRecords, setVaccinationRecords] = useState([
    { id: 1, vaccine: 'COVID-19', date: '2023-07-23', location: 'Hospital' },
    { id: 2, vaccine: 'Flu Shot', date: '2023-02-15', location: 'Clinic' },
    { id: 3, vaccine: 'Hepatitis B', date: '2022-11-30', location: 'Health Center' },
    // Add more vaccination records as needed
  ]);

  const handleAddRecord = (newRecord) => {
    setVaccinationRecords([...vaccinationRecords, newRecord]);
  };

  return (
    <div style={{ textAlign: 'center' }} className="page-container">
      <h2>Vaccination Information</h2>
      <VaccinationTable records={vaccinationRecords} />
      <div className='modal-buttons-container'>
      <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
        Add Record
      </Button>
      </div>
      <AddVaccinations
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddRecord}
      />
    </div>
  );
};

export default VaccinationInformation;
