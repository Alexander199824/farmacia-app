import React, { useState } from 'react';
import './App.css';
import Login from './components/login.js'; // Asegúrate de que la ruta sea correcta

function App() {
  const [showLogin, setShowLogin] = useState(false);  // Estado para mostrar o no el formulario de login

  // Manejador para mostrar el formulario de login
  const handleLoginClick = () => {
    setShowLogin(true);
  };

  // Manejador para regresar a la página principal
  const handleInicioClick = () => {
    setShowLogin(false);  // Ocultamos el formulario de login
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>Mi Farmacia Online</h1>
      </header>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><a href="#" onClick={handleInicioClick}>Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Promociones</a></li>
          <li><a href="#">Salud</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#" onClick={handleLoginClick}><i className="fas fa-user"></i> Login</a></li>
        </ul>
      </nav>

      {/* Si el login está activo, mostramos solo el formulario de login y una ventana de ofertas */}
      {showLogin ? (
        <div style={loginContainerStyle}>
          <Login /> {/* Mostrar solo el formulario de login */}
          <div style={ofertasStyle}>
            <h2>Ofertas Especiales</h2>
            <p>Consigue descuentos increíbles en nuestros productos de temporada.</p>
          </div>
        </div>
      ) : (
        // Mostrar la página principal normal cuando el login no está activo
        <div>
          <div className="search-bar" style={searchBarStyle}>
            <input type="text" placeholder="Buscar productos..." style={inputStyle} />
            <button style={buttonStyle}>Buscar</button>
          </div>

          <div className="main-content" style={mainContentStyle}>
            <div className="product" style={productStyle}>
              <h2>Producto Destacado</h2>
              <p>Descripción del producto y sus beneficios.</p>
              <button style={buttonStyle}>Comprar</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer solo se muestra cuando el login no está activo */}
      {!showLogin && (
        <footer style={footerStyle}>
          <p>&copy; 2024 Mi Farmacia Online. Todos los derechos reservados.</p>
        </footer>
      )}
    </div>
  );
}

// Ajustamos el contenedor de login para eliminar espacios
const loginContainerStyle = {
  margin: '0',        // Eliminamos cualquier margen
  padding: '0',       // Eliminamos relleno extra
  backgroundColor: '#fff',  // Aseguramos que tenga fondo blanco
};

// Eliminamos el espacio entre el menú y el formulario
const headerStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '1em',
  textAlign: 'center',
  margin: '0',
};

const navStyle = {
  backgroundColor: '#004080',
  padding: '0.5em',
  marginBottom: '0',   // Aseguramos que no haya margen abajo del menú
};

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center'
};

const searchBarStyle = {
  textAlign: 'center',
  margin: '1em 0'
};

const inputStyle = {
  padding: '0.5em',
  width: '50%'
};

const buttonStyle = {
  padding: '0.5em 1em',
  backgroundColor: '#cc0000',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
};

const mainContentStyle = {
  padding: '1em',
  maxWidth: '1200px',
  margin: '0 auto'
};

const productStyle = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  padding: '1em',
  margin: '1em 0',
  textAlign: 'center'
};

const ofertasStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  marginTop: '20px',
  textAlign: 'center'
};

const footerStyle = {
  backgroundColor: '#003366',
  color: 'white',
  textAlign: 'center',
  padding: '1em',
  position: 'fixed',
  bottom: 0,
  width: '100%'
};

export default App;
