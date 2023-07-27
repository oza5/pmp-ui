import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal, Typography, Button } from '@mui/material';


const Details = () => {
  const { itemId } = useParams();
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);

  const itemsDetails = {
    Diabetes: { name: 'Diabetes', details: 'Details for Item 1' },
    Hypertension: { name: 'Hyper tension', details: 'Details for Item 2' },
    Syphillis: { name: 'Syphilis', details: 'Details for Item 3' },
    item4: { name: 'Item 4', details: 'Details for Item 4' },
    item5: { name: 'Item 5', details: 'Details for Item 5' },
    item6: { name: 'Item 6', details: 'Details for Item 6' },
    item7: { name: 'Item 7', details: 'Details for Item 7' },
    item8: { name: 'Item 8', details: 'Details for Item 8' },
  };

  const item = itemsDetails[itemId];

  // Function to handle opening and closing modals
  const handleOpenModal1 = () => setModal1Open(true);
  const handleCloseModal1 = () => setModal1Open(false);
  const handleOpenModal2 = () => setModal2Open(true);
  const handleCloseModal2 = () => setModal2Open(false);
  const handleOpenModal3 = () => setModal3Open(true);
  const handleCloseModal3 = () => setModal3Open(false);
  const handleOpenModal4 = () => setModal4Open(true);
  const handleCloseModal4 = () => setModal4Open(false);

  return (
    <div className="page-container">
    <div className="details-container">
      <h3>Details Page</h3>
      <p>Name: {item.name}</p>
      <p>Details: {item.details}</p>
      <Link to="/">Back to Screening Results</Link>

     <div className='modal-buttons-container'>
     <Button
        variant="contained"
        onClick={handleOpenModal1}
        style={{ backgroundColor: 'rgba(0, 150, 255, 0.8)', marginRight: '8px' }}
      >
        Recommendation
      </Button>

      {/* Button to open Modal 2 */}
      <Button
        variant="contained"
        onClick={handleOpenModal2}
        style={{ backgroundColor: 'rgba(200, 200, 200, 0.8)', marginRight: '8px' }}
      >
        Summary
      </Button>

      {/* Button to open Modal 3 */}
      <Button
        variant="contained"
        onClick={handleOpenModal3}
        style={{ backgroundColor: 'rgba(255, 183, 77, 0.8)', marginRight: '8px' }}
      >
        Risk Factor
      </Button>

      {/* Button to open Modal 4 */}
      <Button
        variant="contained"
        onClick={handleOpenModal4}
        style={{ backgroundColor: 'rgba(170, 130, 165, 0.8)' }}
      >
        Frequency
      </Button>
      </div>

      {/* Modals */}
      <Modal open={modal1Open} onClose={handleCloseModal1}>
        <div className="modal">
          <Typography variant="h5">Recommendation</Typography>
          {/* Add information for Modal 1 here */}
          <Button variant="contained" onClick={handleCloseModal1}>
            Close 
          </Button>
        </div>
      </Modal>

      <Modal open={modal2Open} onClose={handleCloseModal2}>
        <div className="modal">
          <Typography variant="h5">Summary</Typography>
          {/* Add information for Modal 2 here */}
          <Button variant="contained" onClick={handleCloseModal2}>
            Close 
          </Button>
        </div>
      </Modal>

      <Modal open={modal3Open} onClose={handleCloseModal3}>
        <div className="modal">
          <Typography variant="h5">Risk Factor</Typography>
          {/* Add information for Modal 3 here */}
          <Button variant="contained" onClick={handleCloseModal3}>
            Close 
          </Button>
        </div>
      </Modal>

      <Modal open={modal4Open} onClose={handleCloseModal4}>
        <div className="modal">
          <Typography variant="h5">Frequency</Typography>
          {/* Add information for Modal 4 here */}
          <Button variant="contained" onClick={handleCloseModal4}>
            Close 
          </Button>
        </div>
      </Modal>
    </div>
    </div>
  );
};

export default Details;
