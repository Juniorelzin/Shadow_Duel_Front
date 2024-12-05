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

        <div>

        </div>

        <div>

        </div>

        <button onClick={() => navigate('/telaBatalha')}>Batalhar</button>

       
      </div>

    </div>
  )
}

export default Batalhas
