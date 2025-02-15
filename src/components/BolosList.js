import React from 'react';
import bolo1 from '../assets/bolo1.png'; // Importe as imagens
import bolo2 from '../assets/bolo2.png';
import bolo3 from '../assets/bolo3.png';
import bolo4 from '../assets/bolo4.png';
// Adicione outras imagens conforme necessário

const BolosList = ({ searchTerm, selectedCategory }) => {
    const bolos = [
        { id: 172, nome: "Delícia de Leite com Abacaxi Zero Açúcar", imagem: bolo1, categoria: "frutas" },
        { id: 171, nome: "Delícia de Leite Ninho com Abacaxi", imagem: bolo2, categoria: "frutas" },
        { id: 170, nome: "Cocada com Doce de Leite Gourmet", imagem: bolo3, categoria: "cremoso" },
        { id: 168, nome: "Pistache com Ganache de Limão", imagem: bolo4, categoria: "chocolate" },
        { id: 169, nome: "Pistache com Morango e Leite Condensado", imagem: bolo1, categoria: "chocolate" },
        { id: 49, nome: "Bombom Branco Trufado", imagem: bolo2, categoria: "cremoso" },
        { id: 89, nome: "Delícia de Chocolate", imagem: bolo3, categoria: "chocolate" },
        { id: 163, nome: "Bolo Pistache", imagem: bolo4, categoria: "chocolate" },
        { id: 157, nome: "Cartola", imagem: bolo1, categoria: "frutas" },
        { id: 154, nome: "Abóbora com Cocada", imagem: bolo2, categoria: "frutas" },
        { id: 159, nome: "Delícia de Castanha Trufado", imagem: bolo3, categoria: "cremoso" },
        { id: 158, nome: "Cupuaçu com Castanha-do-Pará", imagem: bolo4, categoria: "frutas" },
    ];

    const filteredBolos = bolos.filter(bolo => {
        const matchesSearch = bolo.nome.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? bolo.categoria === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bolos-grid">
            {filteredBolos.map((bolo) => (
                <div key={bolo.id} className="bolo-card">
                    <img src={bolo.imagem} alt={bolo.nome} />
                    <h3>{bolo.nome}</h3>
                    <button className="bolo-button">Eu Quero</button>
                </div>
            ))}
        </div>
    );
};

export default BolosList;
