import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../config/axios";
import { useAuth } from '../contexts/AuthContext';
import './Caminho.css';

function Caminho() {
    const navigate = useNavigate();
   

    // Estado para armazenar a carta selecionada
    const [cartaSelecionada, setCartaSelecionada] = useState(null);
    const [tipoDeckEsqueleto, setTipoDeckEsqueleto] = useState('');
    const [tipoDeckGoblin, setTipoDeckGoblin] = useState('');
    const [tipoDeckGuerreiro, setTipoDeckGuerreiro] = useState('');
    const [tipoDeckMago, setTipoDeckMago] = useState('');
    const [deckIds, setDeckIds] = useState(0);
    const [usuarioId, setUsuarioId] = useState(13);

    const addDeckToUser = async () => {
        // const deckData = {
        //     usuarioId,
        //     deckIds
        // };
        // console.log(deckData)
        // try {
        //   const response = await api.put('/add-decks', deckData);  
        //   console.log(response)    
          
        // } catch (error) {
        //   console.error('Erro ao buscar dados do usuário:', error);
        // }
        navigate("/batalhas");
      
    };
  

    // Função para selecionar a carta
    const selecionarCarta = (carta) => {
        setCartaSelecionada(carta);
        if (carta === 'esqueleto') {
            setDeckIds(1)
            setTipoDeckEsqueleto(carta)
            setTipoDeckGoblin('')
            setTipoDeckGuerreiro('')
            setTipoDeckMago('')
        } else if (carta === 'goblin') {
            setDeckIds(2)
            setTipoDeckGoblin(carta)
            setTipoDeckEsqueleto('')
            setTipoDeckGuerreiro('')
            setTipoDeckMago('')
        } else if (carta === 'guerreiro') {
            setDeckIds(3)
            setTipoDeckGuerreiro(carta)
            setTipoDeckGoblin('')
            setTipoDeckEsqueleto('')
            setTipoDeckMago('')
        } else if (carta === 'mago') {
            setDeckIds(4)
            setTipoDeckMago(carta)
            setTipoDeckGoblin('')
            setTipoDeckEsqueleto('')
            setTipoDeckGuerreiro('')
        }
    };

    return (
        <div className='containerCaminho'>
            <div className='fundoTitulo'>
                <h1 className='titulo'>Escolha seu caminho</h1>
            </div>

            <div className='caminhos'>
                <div className='caminhosDeck'>
                    <img
                        className={`cartas ${cartaSelecionada === 'esqueleto' ? 'selecionada' : ''}`}
                        src="./src/assets/images/DeckEsqueleto.png"
                        alt="Deck Esqueleto"
                        onClick={() => selecionarCarta('esqueleto')}
                    />
                    <p className={`textoCarta ${tipoDeckEsqueleto ? 'selecionado' : ''}`}>{tipoDeckEsqueleto.toUpperCase()}</p>
                </div>

                <div className='caminhosDeck'>
                    <img
                        className={`cartas ${cartaSelecionada === 'goblin' ? 'selecionada' : ''}`}
                        src="./src/assets/images/DeckGoblin.png"
                        alt="Deck Goblin"
                        onClick={() => selecionarCarta('goblin')}
                    />
                    <p className={`textoCarta ${tipoDeckGoblin ? 'selecionado' : ''}`}>{tipoDeckGoblin.toUpperCase()}</p>
                </div>

                <div className='caminhosDeck'>
                    <img
                        className={`cartas ${cartaSelecionada === 'guerreiro' ? 'selecionada' : ''}`}
                        src="./src/assets/images/DeckGuerreiro.png"
                        alt="Deck Guerreiro"
                        onClick={() => selecionarCarta('guerreiro')}
                    />
                    <p className={`textoCarta ${tipoDeckGuerreiro ? 'selecionado' : ''}`}>{tipoDeckGuerreiro.toUpperCase()}</p>
                </div>

                <div className='caminhosDeck'>
                    <img
                        className={`cartas ${cartaSelecionada === 'mago' ? 'selecionada' : ''}`}
                        src="./src/assets/images/DeckMago.png"
                        alt="Deck Mago"
                        onClick={() => selecionarCarta('mago')}
                    />
                    <p className={`textoCarta ${tipoDeckMago ? 'selecionado' : ''}`}>{tipoDeckMago.toUpperCase()}</p>
                </div>
            </div>

            <div className='divBotao'>
                <button
                    className='botaoComecar'
                    onClick={() => addDeckToUser()}
                    disabled={!cartaSelecionada} // Desabilita o botão se nenhuma carta for selecionada
                >
                    Começar!
                </button>
            </div>
        </div>
    );
}

export default Caminho;
