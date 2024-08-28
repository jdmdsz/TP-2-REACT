import '../styles/Projetos.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projetos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projetos">
      <h2>Meus Projetos</h2>
      <Slider {...settings}>
        <div className="projeto">
          <h3>SocialNet</h3>
          <p>Uma plataforma social para desenvolvedores colaborarem em projetos de código aberto. Os usuários podem criar perfis, publicar seus projetos, encontrar colaboradores e participar de discussões técnicas em fóruns dedicados.</p>
          <a href="link para o projeto">Ver Projeto</a>
        </div>
        <div className="projeto">
          <h3>HealthTrack</h3>
          <p>Um aplicativo de rastreamento de saúde que permite aos usuários monitorar suas atividades físicas, alimentação e sono. O HealthTrack usa gráficos interativos para visualizar dados e fornece dicas personalizadas para melhorar a saúde e o bem-estar.</p>
          <a href="link para o projeto">Ver Projeto</a>
        </div>
      </Slider>
    </div>
  );
};

export default Projetos;
