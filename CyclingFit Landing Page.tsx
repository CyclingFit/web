import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">CyclingFit</h1>
        <p className="text-lg mb-8">La plataforma de biomecánica para ciclistas más avanzada del mundo.</p>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Iniciar Sesión</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Registrarse</Link>
      </div>
    </div>
  );
};

export default LandingPage;

