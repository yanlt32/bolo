import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BoloDetalhes.css';
import bolo1 from '../assets/bolo1.png'; // Importe as imagens
import bolo2 from '../assets/bolo2.png';

const BoloDetalhes = () => {
    const { id } = useParams(); // Pega o ID do bolo da URL

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar o modal

    // Dados dos bolos (pode ser movido para um arquivo JSON ou banco de dados)
    const bolos = [
        { id: 172, nome: "Delícia de Leite com Abacaxi Zero Açúcar", imagem: bolo1, categoria: "frutas", descricao: "Um bolo leve e delicioso, feito com leite e abacaxi, sem adição de açúcar.", calorias: 250, carboidratos: 30, proteinas: 5, gorduras: 10, preco: "R$ 45,00" },
        { id: 171, nome: "Delícia de Leite Ninho com Abacaxi", imagem: bolo2, categoria: "frutas", descricao: "Bolo cremoso com leite ninho e pedaços de abacaxi.", calorias: 300, carboidratos: 35, proteinas: 6, gorduras: 12, preco: "R$ 50,00" },
        // Adicione outros bolos aqui...
    ];

    // Encontra o bolo pelo ID
    const bolo = bolos.find(b => b.id === parseInt(id));

    if (!bolo) {
        return <div>Bolo não encontrado!</div>;
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bolo-detalhes">
            <h1>{bolo.nome}</h1>
            <img src={bolo.imagem} alt={bolo.nome} />
            <p>{bolo.descricao}</p>
            <h3>Como é feito:</h3>
            <p>Este bolo é feito com ingredientes frescos e selecionados, seguindo uma receita tradicional...</p>
            
            <h3>Preço: {bolo.preco}</h3>
            
            <button className="whatsapp-button"
                onClick={() => window.open(`https://wa.me/SEUNUMERO?text=Olá, quero levar o bolo: ${bolo.nome}`, '_blank')}
            >
                Eu Quero Levar
            </button>

            {/* Botão para abrir o modal da tabela nutricional */}
            <button className="modal-button" onClick={openModal}>Ver Tabela Nutricional</button>

            {/* Modal com a Tabela Nutricional */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Tabela Nutricional (por fatia):</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Calorias</th>
                                    <th>Carboidratos</th>
                                    <th>Proteínas</th>
                                    <th>Gorduras</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{bolo.calorias} kcal</td>
                                    <td>{bolo.carboidratos}g</td>
                                    <td>{bolo.proteinas}g</td>
                                    <td>{bolo.gorduras}g</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="close-modal" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoloDetalhes;
