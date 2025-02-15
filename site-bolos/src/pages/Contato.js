import React from 'react';
import '../styles/Contato.css';

const Contato = () => {
    return (
        <div className="contato-container">
            <h1>Contato</h1>
            <p>Telefone: (11) 1234-5678</p>
            <p>Email: contato@sitebolos.com</p>
            <p>Endereço: Rua dos Bolos, 123 - São Paulo, SP</p>
            <button className="contato-btn">Entrar em Contato</button>

            {/* Formulário de Contato (Opcional) */}
            <form className="contato-form">
                <input type="text" placeholder="Seu Nome" required />
                <input type="email" placeholder="Seu Email" required />
                <textarea placeholder="Sua Mensagem" required></textarea>
                <button type="submit" className="contato-btn">Enviar Mensagem</button>
            </form>
        </div>
    );
};

export default Contato;