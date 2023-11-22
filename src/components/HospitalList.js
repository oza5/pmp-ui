import React, { useState, useEffect } from "react";

const HospitalList = ({ zipCode }) => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch(
          `https://discover.search.hereapi.com/v1/discover?at=40.440624,-79.995888&limit=5&q=Hospital&apiKey=8gJ6Qlk23mkR5wz5wfdEQouYKg0Kn_DJJNT6YaTbb48`,
        );

        if (response.ok) {
          const data = await response.json();
          setHospitals(data.items);
        } else {
          throw new Error("Unable to fetch hospitals");
        }
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    fetchHospitals();
  }, [zipCode]);
  const centerContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "20px", // Adjust margin top as needed
  };
  return (
    <div style={centerContentStyle}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Distance</th>
            <th>Phone Numbers</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.title}</td>
              <td>{hospital.address.label}</td>
              <td>{hospital.distance / 1000}km</td>
              <td>
                <ul>
                  {hospital.contacts &&
                    hospital.contacts.map((contact, contactIndex) => (
                      <li key={contactIndex}>
                        <ul>
                          {contact.phone &&
                            contact.phone.map((phone, phoneIndex) => (
                              <div key={phoneIndex}>{phone.value}</div>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalList;
