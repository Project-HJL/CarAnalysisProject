import { useState, useEffect } from 'react';
import logoCar from '/src/assets/logo-car.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={`header-all-content ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="header-content">
          <div className="mobile-menu-icon">
            <button onClick={toggleMenu}>
              <img src="/src/assets/menu-button.png" alt="icone-menu" width="25rem" />
            </button>
          </div>
          <div className="content-logo">
            <Link to="/">
              <img src={logoCar} alt="logo-site" />
            </Link>
          </div>
          <div className="nav-bar">
            <ul className="content-links">
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              <li className="analisar">
                <Link to="/chat-page">Analisar</Link>
              </li>
              <li className="blog">
                <Link to="/blog-page">Blog</Link>
              </li>
              <li className="sobre">
                <Link to="/sobre-nos-new-page">Sobre</Link>
              </li>
            </ul>
            <div className="login-button">
              <Link to="/login-page">
                <button>Entrar</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`menu-mobile ${showHeader ? (menuOpen ? 'open' : 'hidden') : 'hidden'}`}>
        <ul className="content-links">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="analisar">
            <Link to="/chat-page">Analisar</Link>
          </li>
          <li className="blog">
            <Link to="/blog-page">Blog</Link>
          </li>
          <li className="sobre">
            <Link to="/sobre-nos-new-page">Sobre</Link>
          </li>
        </ul>
        <div className="log-button">
          <Link to="/login-page">
            <button>Entrar</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
