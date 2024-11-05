import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../index.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!email.includes('@')) {
      window.alert('O e-mail deve conter um @.');
      return false;
    }
    if (email.trim() === '') {
      window.alert('O campo de e-mail não pode estar vazio.');
      return false;
    }
    if (password.trim() === '' || password.length <= 6) {
      window.alert('A senha deve ter mais de 6 caracteres e não pode estar vazia.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8080/apiCar/webapi/usuario/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, senha: password }),
        });

        if (response.ok) {
          // Define o estado de login no localStorage
          localStorage.setItem('isLoggedIn', 'true');
          setRedirect(true);
        } else if (response.status === 401) {
          window.alert('Credenciais inválidas. Por favor, tente novamente.');
        } else {
          window.alert('Erro ao realizar o login. Por favor, tente novamente.');
        }
      } catch (error) {
        console.error('Erro de conexão com o servidor:', error);
        window.alert('Erro ao conectar com o servidor.');
      }
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-5">
      <div className="container-5-main-form">
        <div className="image-form-2">
          <img src="/src/assets/design azul.png" alt="imagem-azul" />
        </div>
        <div className="form-content-2">
          <form className="content-sign-2" onSubmit={handleSubmit}>
            <div className="content-image-logo">
              <img src="/src/assets/logo-car.png" alt="imagem-logo" />
            </div>
            <p>
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p className="password-field">
              <label htmlFor="password">Digite uma senha:</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Digite uma senha..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </p>
            <div className="content-buttons-format">
              <div className="content-button-sign">
                <button type="submit">Entrar</button>
              </div>
              <div className="content-three-element">
                <Link className="content-cadastrese" to="/cadastro-page">
                  Cadastre-se aqui!
                </Link>
                <span> | </span>
                <Link className="content-back-log" to="/">
                  Voltar
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
