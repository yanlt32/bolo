import { useInView } from 'react-intersection-observer'; // Importando o hook

import './FadeInComponent.css'; // Importando o CSS

const FadeInComponent = () => {
  // Usando o hook para detectar se o elemento está visível
  const { ref, inView } = useInView({
    triggerOnce: true, // Executa a animação apenas uma vez
    threshold: 0.5, // O elemento precisa estar 50% visível para ativar a animação
  });

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'fade-in-visible' : ''}`}
    >
      <h1>Bem-vindo ao nosso site!</h1>
      <p>Conteúdo que aparece com transição ao rolar a página</p>
    </div>
  );
};

export default FadeInComponent;
