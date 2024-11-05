function SobreNos() {
    return (
      <div className="container-3">
        <div className="container-3-content-who">
          <h2>QUEM SOMOS?</h2>
          <p>
            Olá! Nós somos a Orion, um grupo de jovens determinados que se uniram para enfrentar o desafio
            proposto pela Porto Seguro como parte do desafio da FIAP.
            Aqui, dedicamo-nos a oferecer qualidade, desempenho e segurança. Além disso, estamos inovando no
            mercado com nosso sistema de diagnóstico de veículos baseado em inteligência artificial.
            Para obter mais informações, entre em contato conosco por meio de nossas redes sociais.
          </p>
        </div>
        <div className="container-3-content-video">
          <iframe
            className="vid"
            src="https://www.youtube.com/embed/VbwEr9Oody4"
            title="Orion Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="content-blue"></div>
      </div>
    );
  }
  
  export default SobreNos;