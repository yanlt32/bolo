import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // This assumes Header.js is in src/components/

const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <Link to="/" className="logo">
                    <img src={`${process.env.PUBLIC_URL}/imagens/logo-transparent.png`} title="Sodiê Doces" alt="Sodiê Doces Logo" />
                </Link>

                <input className="mobile-btn" type="checkbox" id="mobile-btn" />
                <label className="mobile-icon" htmlFor="mobile-btn">
                    <span className="hamburguer"></span>
                </label>

                <nav>
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bolos">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;