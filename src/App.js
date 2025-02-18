import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bolos from './pages/Bolos';
import Contato from './pages/Contato';
import BoloDetalhes from './pages/BoloDetalhes';
import './styles/BoloDetalhes.css';
import './styles/Header.css'; // Estilos do Header
import './styles/Home.css'; // Estilos da página Home
import './styles/Bolos.css'; // Estilos da página Bolos
import './styles/Contato.css'; // Estilos da página Contato
import './styles/Footer.css'; // Estilos do Footer
import './styles/App.css'; // Estilos globais (opcional)

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bolos" element={<Bolos />} />
                    <Route path="/bolo/:id" element={<BoloDetalhes />} /> {/* Rota para detalhes do bolo */}
                    <Route path="/contato" element={<Contato />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;