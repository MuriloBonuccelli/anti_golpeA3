import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultar from './pages/Consultar';
import Denunciar from './pages/Denunciar';
import Ranking from './pages/Ranking';
import Estatisticas from './pages/Estatisticas';
import Categorias from './pages/Categorias';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultar" element={<Consultar />} />
            <Route path="/denunciar" element={<Denunciar />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

