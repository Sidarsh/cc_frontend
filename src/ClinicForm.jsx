import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const ClinicForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    specialization: '',
    clinicName: '',
    clinicAddress: '',
    clinicContactInformation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
  
      const response = await fetch('http://localhost:3000/api/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${token}`, // Send the token in the Authorization header
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success, maybe show a success message
        console.log('Form data submitted successfully');
      } else {
        // Handle error, maybe show an error message
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Error submitting form data:', error);
    }
  };
  
  

  return (
    <Container>
      <Typography variant="h4">Clinic Information</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Clinic Name"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Clinic Address"
              name="clinicAddress"
              value={formData.clinicAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Clinic Contact Information"
              name="clinicContactInformation"
              value={formData.clinicContactInformation}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default ClinicForm;

