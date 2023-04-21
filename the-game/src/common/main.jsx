import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage'
import TeamPage from './TeamPage'
import RulesPage from '../game/RulesPage'
import Navbar from './Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar/>
      <LandingPage/>
  </React.StrictMode>,
)
