// src/components/HospitalsMap.js
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Latitude of your default location (e.g., city center)
  lng: -122.4194, // Longitude of your default location (e.g., city center)
};

const HospitalsMap = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Implement the logic to fetch local hospitals using an API or a service here
    // You can use Google Places API or any other API that provides hospital data
    // For this example, we'll use a dummy list of hospitals

    // Sample data for hospitals (Replace this with real data from your API)
    const dummyHospitals = [
      { id: 1, name: 'Hospital A', lat: 37.773, lng: -122.42 },
      { id: 2, name: 'Hospital B', lat: 37.772, lng: -122.41 },
      { id: 3, name: 'Hospital C', lat: 37.771, lng: -122.43 },
      // Add more hospitals as needed
    ];

    setHospitals(dummyHospitals);
  }, []);

  return (
    <LoadScript>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={{ lat: hospital.lat, lng: hospital.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default HospitalsMap;
