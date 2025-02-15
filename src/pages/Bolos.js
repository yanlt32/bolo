import React, { useState } from 'react';
import BolosList from '../components/BolosList';
import '../styles/Bolos.css';

const Bolos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="bolos-container">
            <h1>Nossos Bolos</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Pesquisar por ingredientes..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Todas as Categorias</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="frutas">Frutas</option>
                    <option value="cremoso">Cremoso</option>
                    {/* Adicione mais categorias conforme necessário */}
                </select>
            </div>
            <BolosList searchTerm={searchTerm} selectedCategory={selectedCategory} />
        </div>
    );
};

export default Bolos;