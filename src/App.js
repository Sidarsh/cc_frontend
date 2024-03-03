// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ClinicForm from './ClinicForm';
import DoctorsList from './DoctorsList';


function App() {
  return (
    <Router>
      <Routes >
        <Route  path="/register" element={<RegisterPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/dashboard" element={<DashboardPage />} />
        <Route  path="/doctor-register" element={<ClinicForm/>} />
        <Route  path="/doctors-list" element={<DoctorsList/>} />

      </Routes>
    </Router>
  );
}

export default App;
