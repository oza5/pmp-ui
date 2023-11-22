import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: null,
    city: "",
    country: "",
    weight: "",
    height: "",
    gender: "Other",
    pregnant: false,
    tobacco_user: false,
    sexually_active: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.confirmPassword,
          user_details: {
            full_name: formData.firstName + " " + formData.lastName,
            city: formData.city,
            country: formData.country,
            email: formData.email,
            age: formData.age,
            weight: formData.weight,
            height: formData.height,
            sexually_active: formData.sexually_active,
            gender: formData.gender,
            pregnant: formData.pregnant,
            tobacco_user: formData.tobacco_user,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
      nav("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Registration</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Weight (kg)"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Height (cm)"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              fullWidth
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Gender"
              name="gender"
              select
              value={formData.gender}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Pregnant"
              name="pregnant"
              select
              value={formData.pregnant}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tobacco User"
              name="tobacco_user"
              select
              value={formData.tobacco_user}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Sexually Active"
              name="sexually_active"
              select
              value={formData.sexually_active}
              onChange={handleChange}
              fullWidth
              margin="dense"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
