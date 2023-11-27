import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@mui/material";

const ProvidersScreen = () => {
  const [responseData, setResponseData] = useState(null);
  const [value, setValue] = useState(0); // State for the active tab index
  const [selectedItem, setSelectedItem] = useState(null); // State for the selected item within each grade category
  const [openDialog, setOpenDialog] = useState(false); // State to control the modal/dialog visibility
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [tobacco, setTobacco] = useState('');
  const [sexually_active, setSexActive] = useState('');
  const handleReset = () => {
    window.location.reload(); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      key:'957f06a63e36d07d526a5070acd260a3',
      age:age,
      sex: gender,
      pregnant:pregnant,
      tobacco:tobacco,
      sexuallyActive:sexually_active
    });
    
    const fetchData = async () => {
  
      try {
        const response = await fetch(
          `https://data.uspreventiveservicestaskforce.org/api/json/?${queryParams}`,
        );
        const data = await response.json();
        setResponseData(data.specificRecommendations);
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };
    fetchData();
  }

  const filteredGrades = (grade) => {
    return responseData?.filter((item) => item.grade === grade) || [];
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
    setSelectedItem(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedItem(null);
  };

  return (
    <div style={{ textAlign: "center" }} className="screen-container">
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8}>
        <div>
        <h2>Screen My Patient</h2>
      <form style={{display:"flex", flexDirection:'column',  alignItems:'center'}} onSubmit={handleSubmit}>
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ width: '50%' }}
            margin="dense"

          />
          <TextField
            label="Weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{ width: '50%' }}
            margin="normal"

          />
          <TextField
            label="Height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            sx={{ width: '50%' }}
            margin="normal"
      
          />
          <FormControl   sx={{ width: '50%' }} margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl   sx={{ width: '50%' }} margin="normal">
            <InputLabel>Pregnant</InputLabel>
            <Select value={pregnant} onChange={(e) => setPregnant(e.target.value)}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl   sx={{ width: '50%' }} margin="normal">
            <InputLabel>Tobacco User - ever</InputLabel>
            <Select value={tobacco} onChange={(e) => setTobacco(e.target.value)}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl  sx={{ width: '50%' }}  margin="normal">
            <InputLabel>Sexually Active</InputLabel>
            <Select value={sexually_active} onChange={(e) => setSexActive(e.target.value)}>
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Y">Yes</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </Select>
          </FormControl>
          <div className="button-container">
          <Button sx={{ width: '50%' }}variant="contained" color="primary" type="submit" style={{alignItems:'center'}}>
            Start Screening
          </Button>
          <Button sx={{ width: '50%' }}variant="contained" color="error" onClick={handleReset}>
            Reset
          </Button>
          </div>
          <div style={{ marginBottom: "20px" }}></div>
        </form>
        </div>
        {responseData && <div ><Tabs value={value} onChange={handleChange} centered>
          <Tab label="A - Recommended" />
          <Tab label="B - Recommended" />
          <Tab label="C - Selectively Recommended" />
        </Tabs>
        <Typography>
          <List>
            {value === 0 &&
              filteredGrades("A").map((item) => (
                <ListItem
                  key={item.id}
                  button
                  divider={true}
                  onClick={() => handleItemClick(item)}
                  selected={selectedItem && selectedItem.id === item.id}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {value === 1 &&
              filteredGrades("B").map((item) => (
                <ListItem
                  key={item.id}
                  button
                  divider={true}
                  onClick={() => handleItemClick(item)}
                  selected={selectedItem && selectedItem.id === item.id}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {value === 2 &&
              filteredGrades("C").map((item) => (
                <ListItem
                  key={item.id}
                  button
                  divider={true}
                  onClick={() => handleItemClick(item)}
                  selected={selectedItem && selectedItem.id === item.id}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
          </List>
        </Typography></div>}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          {selectedItem && (
            <>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogContent>
                {selectedItem.text && (
                  <div style={{ marginBottom: "20px" }}>
                    <Typography variant="h6">
                      Specific Recommendations
                    </Typography>
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{ __html: selectedItem.text }}
                    />
                  </div>
                )}
                {selectedItem.servFreq && (
                  <div style={{ marginBottom: "20px" }}>
                    <Typography variant="h6">Frequency of Service</Typography>
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: selectedItem.servFreq,
                      }}
                    />
                  </div>
                )}
                {selectedItem.riskText && (
                  <div style={{ marginBottom: "20px" }}>
                    <Typography variant="h6">
                      Risk Factor Information
                    </Typography>
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: selectedItem.riskText,
                      }}
                    />
                  </div>
                )}
                <Typography variant="caption">
                  Disclaimer: The data is collected from a the U.S. Preventive
                  Services Task Force (USPSTF) recommendations.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Close</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Grid>
    </Grid>
    </div>
  );
};

export default ProvidersScreen;
