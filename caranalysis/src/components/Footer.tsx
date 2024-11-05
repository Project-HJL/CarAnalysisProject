function Footer() {
  return (
      <footer>
          <div className="footer">
              <div className="footer-all-content">
                  <div className="footer-contatos">
                      <h2>Contatos</h2>
                      <div className="footer-contatos-pad">
                          <div className="email-icon">
                              <img src="/src/assets/email.png" alt="email-icon" width="6%" height="6%" />
                              <a href="mailto:challengehjl@gmail.com" target="_blank" rel="noopener noreferrer">
                                  <h3>challengehjl@gmail.com</h3>
                              </a>
                          </div>
                          <div className="telephone-icon">
                              <img src="/src/assets/telefone.png" alt="telephone-icon" width="6%" height="6%" />
                              <h3>+55 11 98765-4321</h3>
                          </div>
                          <div className="mapa-icon">
                              <img src="/src/assets/mapa.png" alt="mapa-icon" width="6%" height="6%" />
                              <a 
                                  href="https://www.google.com/maps/place/FIAP+-+Aclima%C3%A7%C3%A3o/@-23.5740998,-46.6258023,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce597abf1a28ff:0x1b02a58f85e6395e!8m2!3d-23.5741047!4d-46.6232274!16s%2Fg%2F11gz7vpgn?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <h3>Av. Lins de Vasconcelos, 1222 - Aclimação, São Paulo - SP, 01538-001</h3>
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="footer-paginas">
                      <h2>Páginas</h2>
                      <div className="footer-content-page-1">
                          <h3><a href="#">Home</a></h3>
                          <h3><a href="#">Analisar</a></h3>
                          <h3><a href="#">Blog</a></h3>
                          <h3><a href="#">Sobre</a></h3>
                      </div>
                  </div>

                  <div className="footer-social">
                      <h2>Siga-nos</h2>
                      <div className="content-social-icons">
                          <div className="instagram-icon">
                              <a href="https://www.instagram.com/orion_developers/" target="_blank" rel="noopener noreferrer">
                                  <img src="/src/assets/instagram.png" alt="instagram-icon" />
                              </a>
                          </div>
                          <div className="youtube-icon">
                              <a href="https://www.youtube.com/@OrionDevelopers" target="_blank" rel="noopener noreferrer">
                                  <img src="/src/assets/youtube.png" alt="youtube-icon" />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="content-since">
                  <p>&#169; 2024 All rights reserved | Car Analysis</p>
              </div>
          </div>
      </footer>
  );
}

export default Footer;
