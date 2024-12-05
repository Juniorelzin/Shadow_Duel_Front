import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Batalhas.css'

function Batalhas() {

  const navigate = useNavigate();

  return (
    <div className='containerBattles'>
      <Navbar />

      <div className='divTotal'>

        <div className='divTextoSuperior'>
              <h1>Selecione uma Batalha</h1>
        </div>

        <div className='divSelecionarBatalhas'>

          <div className='divEscolhaBatalha1'>

            <div className='divEscolhaBatalhaCima'>
            <img className='imgBatalha' onClick={() => navigate('/telaBatalha')} src="./src/assets/images/imgLutarGoblin.jpg" alt="imgGoblin" />
            </div>

            <div className='divEscolhaBatalhaBaixo'>

            </div>

            
         

          </div>
          <div className='divEscolhaBatalha2'>
          <div className='divEscolhaBatalhaCima'>
            <img className='imgBatalhaD'  src="./src/assets/images/imgLutarEsqueleto.jpg" alt="imgGoblin" />
            </div>

            <div className='divEscolhaBatalhaBaixo'>
            <p>Em Breve</p>
            </div>


          </div>
          <div className='divEscolhaBatalha3'>
          <div className='divEscolhaBatalhaCima'>
            <img className='imgBatalhaD'  src="./src/assets/images/imgLutarMago.jpg" alt="imgGoblin" />
            
            </div>

            <div className='divEscolhaBatalhaBaixo'>
            <p>Em Breve</p>
            </div>


          </div>


        

        </div>

       

       
      </div>

    </div>
  )
}

export default Batalhas
