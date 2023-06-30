import React, { useState, useEffect } from 'react';
import './Board.css';
import RollDice from '../components/RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "animate.css/animate.min.css";
library.add(fas)
import { getBoard, getCategories, getPlayer } from '../Comunications';

export default function Board() {
  const [cells, setCells] = useState([]);
  const [categories, setCategories] = useState([]);
  const [players, setPlayers] = useState([]);
  
  // Asegúrate de definir las variables `numberOfPlayers` y `gameId`
  const numberOfPlayers = 4;
  const gameId = 1;

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

    const fetchPlayers = async () => {
      try {
        const playerData = [];
        for (let playerNumber = 1; playerNumber <= numberOfPlayers; playerNumber++) {
          const player = await getPlayer(gameId, playerNumber);
          playerData.push(player);
        }
        setPlayers(playerData);
      } catch (error) {
        console.error('Error getting players:', error);
      }
    };

    fetchBoardData();
    fetchCategories();
    fetchPlayers();
  }, []);

  return (
    <div className="board">
      <h1>
        <img src="logos/logo.png" width="50" height="50" /> Brain Royale{' '}
        <img src="logos/logo.png" width="50" height="50" />
      </h1>
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
      </div>
      <div className="meta">
        <img src="otro/copa.png" alt="Goal" width="100" height="100" />
      </div>
    </div>
  );
}
