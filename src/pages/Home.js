import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import bannerDesktop from "../assets/banner.jpg"; // Imagem para desktop
import bannerMobile from "../assets/banner-mobile.jpg"; // Imagem para celular
import bolo1 from "../assets/bolo1.png";
import bolo2 from "../assets/bolo2.png";
import bolo3 from "../assets/bolo3.png"
import { Link } from 'react-router-dom';
;

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Banner */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${isMobile ? bannerMobile : bannerDesktop})`,
        }}
      >
        {/* Banner content (optional) */}
      </div>

      {/* Restante do conteúdo */}
      <div className="intro">
        <p>
          Deliciosamente recheados e com muito sabor, cada um de nossos bolos é
          criado para proporcionar mais amor e carinho para todas as ocasiões.
        </p>
      </div>

      <div className="destaque-bolos">
        <h2>Nossos Bolos em Destaque</h2>
        <div className="bolos-grid">
          <div className="bolo-card">
            <img src={bolo1} alt="Bolo de Chocolate" />
            <h3>Bolo de Chocolate</h3>
            <p>Um clássico irresistível, perfeito para qualquer ocasião.</p>
          </div>
          <div className="bolo-card">
            <img src={bolo2} alt="Bolo de Morango" />
            <h3>Bolo de Morango</h3>
            <p>Leve, fresco e recheado com morangos frescos.</p>
          </div>
          <div className="bolo-card">
            <img src={bolo3} alt="Bolo de Cenoura" />
            <h3>Bolo de Cenoura</h3>
            <p>Macio e delicioso, com cobertura de chocolate.</p>
          </div>
        </div>
      </div>

      <div className="depoimentos">
        <h2>O que nossos clientes dizem</h2>
        <div className="depoimentos-grid">
          <div className="depoimento-card">
            <p>
              "Os bolos da Sodiê são incríveis! Sempre frescos e saborosos."
            </p>
            <span>- Maria Silva</span>
          </div>
          <div className="depoimento-card">
            <p>"Adorei o atendimento e a qualidade dos produtos. Recomendo!"</p>
            <span>- João Souza</span>
          </div>
          <div className="depoimento-card">
            <p>"Perfeito para festas e eventos. Todos elogiaram!"</p>
            <span>- Ana Costa</span>
          </div>
        </div>
      </div>

      <div className="cta">
  <h2>Experimente nossos bolos!</h2>
  <Link to="/bolos">
    <button>Ver Mais Bolos</button>
  </Link>
</div>

    </div>
  );
};

export default Home;
