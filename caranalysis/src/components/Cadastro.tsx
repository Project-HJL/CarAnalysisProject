import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../index.css';

const CadastroPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const validateForm = () => {
    if (!/^[a-zA-Z\s]{1,40}$/.test(name)) {
      window.alert('O nome deve conter apenas letras e ter no máximo 40 caracteres.');
      return false;
    }

    if (!email.includes('@') || email.trim() === '') {
      window.alert('O e-mail deve conter um @ e não pode estar vazio.');
      return false;
    }

    if (password.trim() === '' || password.length <= 6) {
      window.alert('A senha deve ter mais de 6 caracteres e não pode estar vazia.');
      return false;
    }

    if (repeatPassword.trim() === '' || repeatPassword !== password) {
      window.alert('As senhas não são idênticas ou o campo de repetir senha está vazio.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8080/apiCar/webapi/usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome: name, email, senha: password }),
        });

        if (response.ok) {
          localStorage.setItem('isLoggedIn', 'true'); // Define o estado de login como verdadeiro
          setRedirect(true); // Atualiza o estado de redirecionamento
          window.alert('Cadastro realizado com sucesso!');
        } else {
          const errorText = await response.text();
          window.alert(`Erro ao cadastrar: ${errorText}`);
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
    <div className="container-4">
      <div className="container-4-main-form">
        <div className="form-content">
          <form className="content-sign" onSubmit={handleSubmit}>
            <div className="content-image-logo">
              <img src="/src/assets/logo-car.png" alt="imagem-logo" />
            </div>
            <p>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
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
            <p className="password-field">
              <label htmlFor="repeat-password">Repita a senha:</label>
              <div className="password-container">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  name="repeat-password"
                  id="repeat-password"
                  placeholder="Repita a sua senha..."
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="toggle-password"
                >
                  {showRepeatPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </p>
            <div className="content-cad-back">
              <div className="content-button-sign">
                <Link to="/login-page">
                  <button type="button">Voltar</button>
                </Link>
              </div>
              <div className="content-button-sign">
                <button type="submit">Cadastrar-se</button>
              </div>
            </div>
          </form>
        </div>
        <div className="image-form">
          <img src="/src/assets/design azul.png" alt="imagem-azul" />
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;
