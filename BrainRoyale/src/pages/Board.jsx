import React, { useState, useEffect } from 'react';
import './Board.css';
import { getBoard, getCategories, getPlayer, getGame } from '../Comunications';

import RollDice from '../components/RollDice'

export default function Board({ gameId }) {
  const [cells, setCells] = useState([]);
  const [categories, setCategories] = useState([]);
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async (gameId) => {
      try {
        const gameData = await getGame(gameId);
        setGame(gameData);
      } catch (error) {
        console.error('Error getting game:', error);
      }
    };
  
    if (gameId) {
      fetchGame(gameId);
    }
  }, [gameId]);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const boardData = await getBoard();
        setCells(boardData);
      } catch (error) {
        console.error('Error getting board data:', error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData);
      } catch (error) {
        console.error('Error getting categories:', error);
      }
    };
  
    if (gameId) {
      fetchBoardData();
      fetchCategories();
    }
  }, [gameId]);
  
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playerData = [];
        for (let playerNumber = 1; playerNumber <= game?.players; playerNumber++) {
          const player = await getPlayer(game?.id, playerNumber);
          playerData.push(player);
        }
        setPlayers(playerData);
      } catch (error) {
        console.error('Error getting players:', error);
      }
    };
  
    if (game) {
      fetchPlayers();
    }
  }, [game]);
   
  return (
    <div className="board">
      <h1>
        <img src="logos/logo.png" width="50" height="50" /> Brain Royale (ID de juego: {gameId}){' '}
        <img src="logos/logo.png" width="50" height="50" />
      </h1>
      <h2>TURNO: JUGADOR {}</h2> 
      <RollDice />
      <div className="grid">
        {cells.map((cell, index) => {
          const category = categories[cell.category_id - 1];
          const cellClassName = category ? category.name : '';

          return (
            <div
              key={index}
              className={`cell ${cellClassName}`}
              style={{ backgroundColor: category?.color }}
            >
              
              <img
                src={`logos/logo_${category?.name}.png`}
                alt={category?.name}
                className="category-logo"
                width="80"
                height="80"
              />
            </div>
          );
        })}
        <div className="meta">
        <img src="otro/copa.png" alt="Goal" width="100" height="100" />
      </div>
      </div>

      <div className="player-sidebar">
      {players.map((player) => (
        <div key={player.number} className="player-sidebar-item">
          <h2>JUGADOR {player.number} <img
              src={`fichas/ficha_${player.category_id}.png`}
              alt={`Ficha ${player.category_id}`}
              width="20"
              height="15"
            /></h2>
          <p>
          <h3>PASO: {player.skip === 0 ? 'NO OCUPADO' : 'OCUPADO'}</h3> 
          </p>
            <p>
            <h3>FICHAS CEREBRO: {player.brain}</h3> 
          </p>
          <br></br>
        </div>
      ))}
    </div>
    </div>
  );
}
