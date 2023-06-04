import Navbar from '../components/Navbar';
import './Game.css';
import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../App';

// Inspiración en Cápsula 6 = Conexión con API, de semestre 2022-2

export default function Game() {

    const playerId = 0;
    const matchId = 0;
    const getGame = async () => {
      const url = `${SERVER_URL}/game/${matchId}`;
      await axios.get(url).then((responde) => {
        console.log(responde.data);
      });
    };

    const getPlayers = async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios.get(url).then((responde) => {
        console.log(responde.data);
      });
    };

    // lanzar los dados de manera aleatoria
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
  }
