import React from 'react';
import logoCar from '/src/assets/logo-car.png'; // Importe a imagem diretamente

const WaveSection: React.FC = () => {
  return (
    <section className="wave">
      <img src={logoCar} alt="logo-caranalysis" />
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>
  );
};

export default WaveSection;
