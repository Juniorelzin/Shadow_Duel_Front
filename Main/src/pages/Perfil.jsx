import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './Perfil.css';
import api from "../config/axios";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Perfil() {

  const navigate = useNavigate();

  const { idUsuario } = useAuth();
  const [username, setUsername] = useState("")
  const [moedas, setMoedas] = useState("")
  const [decks, setDecks] = useState("")
  const [novoNome, setNovoNome] = useState("")



  useEffect(() => {
    async function getUsuarioInfo() {
      try {
        const response = await api.get(`/usuarios/${idUsuario}`);
        setUsername(response.data.fullName)
        setMoedas(response.data.dinheiro)
        setDecks(response.data.decks.map(deck => deck).join(","))
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    }
    console.log("Teste")
    getUsuarioInfo();
  }, []);


  const mudarNome = async () => {
      try {
        const response = await api.patch(`/usuarios/${idUsuario}`, novoNome);    
        setUsername(novoNome)
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
      console.log(novoNome)
    }

    const deletarUsuario = async () => {
      try {
        const response = await api.delete(`/usuarios/${idUsuario}`);
        console.log(response)
        localStorage.clear()
        navigate("/login")
      
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
      console.log(novoNome)
    }
  



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
            <h1 className='TextoNomePerfil'> USERNAME: { username }</h1>
          </div>

          <div className='textoPerfil'>
            <h2 className='TextoMoeda'>MOEDAS: { moedas }</h2>
            <h2 className='TextoDecks'>DECKS: { decks }</h2>
          </div>

          <button className='btnDeletarConta' onClick={mudarNome}>Editar Nome</button>
          <input onChange={(e) => setNovoNome(e.target.value)} type="text"/>


          <button className='btnDeletarConta' onClick={deletarUsuario}>Deletar Conta</button>
         
        </div>

      </div>
    </div>
  );
}

export default Perfil;

