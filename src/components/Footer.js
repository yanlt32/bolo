import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 Site de Bolos. Todos os direitos reservados.</p>
            <p>
                Desenvolvido por <a
                    href="https://github.com/yanlt32"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    yanlt32
                </a>
            </p>
        </footer>
    );
};

export default Footer;