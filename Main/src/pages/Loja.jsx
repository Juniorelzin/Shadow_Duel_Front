import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Loja.css';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import Carta from '../components/Carta';

// Definir o modal root para react-modal
Modal.setAppElement('#root');

function Loja() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartasDoDeck, setCartasDoDeck] = useState([]); // Estado para as cartas do deck selecionado

  // Animação de slide usando react-spring
  const slideIn = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Função para abrir e fechar o modal
  const toggleModal = (idDeck) => {
    if (idDeck) {
      // Filtrando as cartas do deck com base no id do deck
      const cartasSelecionadas = cartas.filter((carta) => carta.deckId === idDeck);
      setCartasDoDeck(cartasSelecionadas);
    }
    setIsOpen(!isOpen);
  };

  // Cartas disponíveis, agora com um `deckId` para identificar o deck de cada carta
  const [cartas, setCartas] = useState([
    { id: 1, deckId: 1, imagem: "./src/assets/images/Carta de esqueleto 1.png", nome: "Guardião Esqueleto", descricao: "Destruidor", atk: 85, def: 70 },
    { id: 2, deckId: 1, imagem: "./src/assets/images/Carta de esqueleto 2.png", nome: "Horda de Esqueleto", descricao: "Usa espada", atk: 55, def: 45 },
    { id: 3, deckId: 1, imagem: "./src/assets/images/Carta de esqueleto 3.png", nome: "Valquíria Ossífera", descricao: "é verde", atk: 90, def: 80},
    { id: 4, deckId: 1, imagem: "./src/assets/images/Carta de esqueleto 4.png", nome: "Esqueleto Gladiador", descricao: "Usa arco", atk: 70, def: 60 },
    { id: 5, deckId: 1, imagem: "./src/assets/images/Carta de esqueleto 5.png", nome: "Senhor da Morte", descricao: "protege", atk: 95, def: 80 },
    { id: 6, deckId: 2, imagem: "./src/assets/images/Carta de goblin 1.png", nome: "Horda de Goblins", descricao: "osso", atk: 65, def: 30 },
    { id: 7, deckId: 2, imagem: "./src/assets/images/Carta de goblin 2.png", nome: "Xamã Goblin", descricao: "7 cabeças", atk: 40, def: 45 },
    { id: 8, deckId: 2, imagem: "./src/assets/images/Carta de goblin 3.png", nome: "Goblin Feiticeiro", descricao: "torre", atk: 70, def: 35 },
    { id: 9, deckId: 2, imagem: "./src/assets/images/Carta de goblin 4.png", nome: "Goblin Arqueiro", descricao: "é cinza", atk: 65, def: 20 },
    { id: 10, deckId: 2, imagem: "./src/assets/images/Carta de goblin 5.png", nome: "Mercenario Goblin", descricao: "late", atk: 80, def: 50 },
    { id: 11, deckId: 3, imagem: "./src/assets/images/Carta de guerreiro 1.png", nome: "Guardião das Tempestades", descricao: "osso", atk: 75, def: 90 },
    { id: 12, deckId: 3, imagem: "./src/assets/images/Carta de guerreiro 2.png", nome: "Executor Relâmpago", descricao: "7 cabeças", atk: 85, def: 70 },
    { id: 13, deckId: 3, imagem: "./src/assets/images/Carta de guerreiro 3.png", nome: "Cavaleiro das Chamas", descricao: "torre", atk: 80, def: 70 },
    { id: 14, deckId: 3, imagem: "./src/assets/images/Carta de guerreiro 4.png", nome: "Arqueiro Celestial", descricao: "é cinza", atk: 75, def: 55 },
    { id: 15, deckId: 3, imagem: "./src/assets/images/Carta de guerreiro 5.png", nome: "Cavaleiros de Ferro", descricao: "late", atk: 90, def: 85 },
    { id: 16, deckId: 4, imagem: "./src/assets/images/Carta de mago 1.png", nome: "Arcanista de Fogo Ancestral", descricao: "osso", atk: 90, def: 70 },
    { id: 17, deckId: 4, imagem: "./src/assets/images/Carta de mago 2.png", nome: "Mago Cósmico", descricao: "7 cabeças", atk: 90, def: 10 },
    { id: 18, deckId: 4, imagem: "./src/assets/images/Carta de mago 3.png", nome: "Guradião do Relogio Necromante", descricao: "torre", atk: 80, def: 85 },
    { id: 19, deckId: 4, imagem: "./src/assets/images/Carta de mago 4.png", nome: "Mestre do Fogo Arcano", descricao: "é cinza", atk: 90, def: 70 },
    { id: 20, deckId: 4, imagem: "./src/assets/images/Carta de mago 5.png", nome: "Guardião do Submundo", descricao: "late", atk: 90, def: 75 }
  ]);

  return (
    <div className="containerLoja">
      <Navbar />

      <div className="divMercador">
        <img className="imgMercador" src="./src/assets/images/mercador.png" alt="Imagem Mercador" />
      </div>

      <div className="divDeck">
        <div className="divDecks">
          <img onClick={() => toggleModal(1)} className="imgDecks" src="./src/assets/images/DeckEsqueleto.png" alt="Carta 1" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(2)} className="imgDecks" src="./src/assets/images/DeckGoblin.png" alt="Carta 2" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(3)} className="imgDecks" src="./src/assets/images/DeckGuerreiro.png" alt="Carta 3" />
        </div>
        <div className="divDecks">
          <img onClick={() => toggleModal(4)} className="imgDecks" src="./src/assets/images/DeckMago.png" alt="Carta 4" />
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
            width: '85%',
            height: '90%',
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
            <div style={{ padding: '20px', backgroundColor: '#D3D6CF', flexShrink: 0 }}>
              <h2>Cartas do Deck Selecionado</h2>
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
              {cartasDoDeck.map((p) => (
                <Carta carta={p} key={p.id} />
              ))}
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#D3D6CF',
              textAlign: 'center',
              flexShrink: 0,
              display: 'flex',            // Usando flexbox para alinhar os botões na mesma linha
              justifyContent: 'center',   // Centraliza os botões horizontalmente
              gap: '10px',                // Adiciona um espaçamento de 10px entre os botões
            }}>
              <button
                onClick={() => {
                  console.log("Compra realizada!");
                  setIsOpen(false); // Fecha o modal após a ação
                }}
                style={{
                  padding: '25px 35px',
                  backgroundColor: '#4CAF50', // Verde para compra
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '150px'
                }}
              >
                Comprar
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
                  marginTop: '150px'
                }}
              >
                Fechar
              </button>
            </div>

          </div>
        </animated.div>
      </Modal>
    </div>
  );
}

export default Loja;



