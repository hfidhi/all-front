import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Removed Router (already in main.tsx)
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      {/* Removed redundant Router wrapper */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Now relative to /login */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Removed Navigate (handled by basename) */}
      </Routes>
    </AuthProvider>
  );
}

export default App;