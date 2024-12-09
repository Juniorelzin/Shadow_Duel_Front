import React from 'react';
import Navbar from '../components/Navbar';
import './Perfil.css';

function Perfil() {
  return (
    <div className='containerPerfil'>
      <Navbar />

      <div className='paginaPerfil'>
        <div className='conteudoPerfil'>
          
          {/* Certifique-se de que o caminho da imagem está correto */}
          <img className='imagemLogoPerfil' 
               src="./src/assets/images/LogoShadowDuel.png" 
               alt="Logo Shadow Duel" />
          
          <div className='usernameTexto'>
            <h1 className='TextoNomePerfil'> USERNAME:</h1>
          </div>
          
          <div className='textoPerfil'>
            <h2 className='TextoMoeda'>MOEDAS:</h2>
            <h2 className='TextoDecks'>DECKS:</h2>
          </div>
          <button className='btnDeletarConta'>Deletar Conta</button>
        </div>
       
      </div>
    </div>
  );
}

export default Perfil;

