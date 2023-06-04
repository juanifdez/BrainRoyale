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
    let diceSum = dice1 + dice2;

    // sumar la suma de los dados a la posición del jugador
    let playerPosition = 0;
    playerPosition += diceSum;

    // prevenir que el jugador se salga del tablero
    if (playerPosition > 64) { async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios
      .post(url,body)
      .then((response) => {
        alert("No puedes avanzar más allá del tablero. Pierdes tu turno");
        playerPosition -= diceSum;
      });
    }}
    else { async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios
      .post(url,body)
      .then((response) => {
        console.log("Avanzaste " + diceSum + " casillas");
        console.log("Estás en la casilla " + playerPosition)
        console.log("La carta es de CategoryId " +  playerPosition%5 +1);
      });
    }};

    const getCard = async () => {
      let cardId = playerPosition%5 +1;
      const url = `${SERVER_URL}/game/${matchId}/card/${cardId}`;
      await axios.get(url).then((responde) => {
        console.log(responde.data);
      }
    )};

    // simular un true o false
    let randomQuestion = Math.random() < 0.5;
    async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios
      .post(url,body)
      .then((response) => {
        console.log("Pasamos a la ronda" + ronda +1);
      });
    };

    // casos de pregunta correcta o incorrecta
    if (randomQuestion) { async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios
      .post(url,body)
      .then((response) => {
        console.log("La respuesta es correcta!");
      });  
    }
      playerTurn += 1;
    }
    else { async () => {
      const url = `${SERVER_URL}/game/${matchId}/player/${playerId}`;
      await axios
      .post(url,body)
      .then((response) => {
        console.log("La respuesta es incorrecta!");
      }
    )};
      playerTurn += 1;
    }
  
  

    
  }
