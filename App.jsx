import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Listagem from './pages/listagem';
import Detalhes from './pages/detalhes';

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Listagem />} />
          <Route path="/registros/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </>
  );
}