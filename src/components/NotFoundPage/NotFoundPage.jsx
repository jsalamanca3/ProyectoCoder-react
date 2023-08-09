import React from 'react';
import "./notfoundpage.css"

const NotFoundPage = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className='container-not-found-page'>
      <div className='div-img-not-found-page'>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/199.svg' alt='Slowking' />
      </div>
      <div className='div-text-not-found-page'>
      <h1>404 - Página no encontrada</h1>
      <p className='p-not-found'>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={handleGoHome} className='btn-not-found-page'>Volver al inicio</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
