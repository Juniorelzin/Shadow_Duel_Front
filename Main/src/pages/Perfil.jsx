import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './Perfil.css';
import api from "../config/axios";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';

Modal.setAppElement('#root');

function Perfil() {

  const navigate = useNavigate();

  const { idUsuario } = useAuth();
  const [username, setUsername] = useState("")
  const [moedas, setMoedas] = useState("")
  const [decks, setDecks] = useState("")
  const [novoNome, setNovoNome] = useState("")

 

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeletar,  setIsOpenDeletar] = useState(false)

  
  // Animação de slide usando react-spring
  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const toggleModalDeletar = () => {
    setIsOpenDeletar(!isOpenDeletar);
  };



  useEffect(() => {
    async function getUsuarioInfo() {
      try {
        const response = await api.get(`/usuarios/${idUsuario}`);
        setUsername(response.data.fullName)
        setMoedas(response.data.dinheiro)
        setDecks(response.data.decks.map(deck => deck).join(","))
        console.log("Teste2")
        console.log(response.data)
        console.log(decks)
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
        setIsOpen(false)
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
      console.log(novoNome)
      window.location.reload(); 
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
            <h1 className='TextoNomePerfil'> { username }</h1>
            <button className='btnMudarNome' onClick={toggleModal}>Editar Nome</button>
          </div>

          <div className='textoPerfil'>
            <h2 className='TextoMoeda'>MOEDAS: { moedas }</h2>
            <h2 className='TextoDecks'>DECKS: { decks }</h2>
          </div>

          


          <button className='btnDeletarConta' onClick={toggleModalDeletar}>Deletar Conta</button>
         
        </div>

      </div>


      {/* Modal de slide */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#D3D6CF',
            padding: 0,
            width: '50%',
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Caixa do modal com animação de slide */}
        <animated.div style={slideIn} className="slide-dialog">
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'D3D6CF'
          }}>
            {/* Título e descrição */}
            <div style={{ padding: '20px', backgroundColor: '#D3D6CF', flexShrink: 0, marginTop: '150px' }}>
              <h2>Escreva um novo nome</h2>
              <input onChange={(e) => setNovoNome(e.target.value)} type="text"/>
              {/* <p>Deck {cartasDoDeck.length ? cartasDoDeck[0].deckId : ''} selecionado.</p> */}
            </div>

            {/* Cartas - Ajuste flexível para ocupar o espaço restante */}
            <div className="cards" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              overflowY: 'auto',
              padding: '10px',
              backgroundColor: '#D3D6CF',
              flexGrow: 1, // Garante que o espaço restante seja ocupado pelas cartas
              flexShrink: 0, // Impede que a área encolha além do necessário
              marginTop: '50px'
            }}>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#D3D6CF',
              textAlign: 'center',
              flexShrink: 0,
              display: 'flex',            // Usando flexbox para alinhar os botões na mesma linha
              justifyContent: 'center',   // Centraliza os botões horizontalmente
              gap: '10px', 
              marginTop: '10px'               // Adiciona um espaçamento de 10px entre os botões
            }}>
              <button
                onClick={mudarNome}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#4CAF50', // Verde para compra
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                 
                }}
              >
                Editar
              </button>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#f44336', // Vermelho para fechar
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                 
                }}
              >
                Cancelar
              </button>
            </div>

          </div>
        </animated.div>
      </Modal>


      <Modal
        isOpen={isOpenDeletar}
        onRequestClose={() => setIsOpenDeletar(false)}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            backgroundColor: '#D3D6CF',
            padding: 0,
            width: '50%',
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Caixa do modal com animação de slide */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'D3D6CF'
          }}>
            <div style={{ padding: '20px', backgroundColor: '#D3D6CF', flexShrink: 0, marginTop: '150px'}}>
              <h2>Tem certeza que deseja excluir sua conta?</h2>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#D3D6CF',
              textAlign: 'center',
              flexShrink: 0,
              display: 'flex',            // Usando flexbox para alinhar os botões na mesma linha
              justifyContent: 'center',   // Centraliza os botões horizontalmente
              gap: '10px', 
              marginTop: '10px'               // Adiciona um espaçamento de 10px entre os botões
            }}>
              <button
                onClick={deletarUsuario}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#4CAF50', // Verde para compra
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',  
                }}
              >
                Deletar
              </button>

              <button
                onClick={() => setIsOpenDeletar(false)}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#f44336', // Vermelho para fechar
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',                 
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
      </Modal>
    </div>
  );
}

export default Perfil;

