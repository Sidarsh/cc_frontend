import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8080/');

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch the list of doctors from your API
    const fetchDoctors = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
          console.error('No token found in local storage');
          return;
        }
        setToken(storedToken);

        const response = await fetch('http://localhost:3000/api/doctor', {
          headers: {
            'authorization': `${storedToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        } else {
          console.error('Failed to fetch doctors');
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleRegister = (doctorId) => {
    // Send a message through WebSocket to register the doctor
    client.send(JSON.stringify({ type: 'register', doctorId }));
  };

  return (
    <Container>
      <Typography variant="h4">Doctors</Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid key={doctor._id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{doctor.fullName}</Typography>
                <Typography>{doctor.specialization}</Typography>
                <Typography>{doctor.clinicName}</Typography>
                <Typography>{doctor.clinicAddress}</Typography>
                <Typography>{doctor.clinicContactInformation}</Typography>
                <Button variant="contained" onClick={() => handleRegister(doctor._id)}>Register</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DoctorsList;
