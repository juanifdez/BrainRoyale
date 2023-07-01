import React, { useState, useEffect } from 'react';
import './Game.css';
import Navbar from '../components/Navbar';
import { getCategories, createGame, createPlayer } from '../Comunications';

export default function Game() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [playerAssignments, setPlayerAssignments] = useState([]);
  const [error, setError] = useState('');
  const [categoryNames, setCategoryNames] = useState([]);

  const handleDecrease = () => {
    if (numberOfPlayers > 2) {
      setNumberOfPlayers(numberOfPlayers - 1);
      setError('');
    }
  };

  const handleIncrease = () => {
    if (numberOfPlayers < 5) {
      setNumberOfPlayers(numberOfPlayers + 1);
      setError('');
    }
  };

  const handleCategorySelection = (category, playerNumber) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[playerNumber - 1] = category;
      return updatedCategories;
    });
    setPlayerAssignments((prevAssignments) => [
      ...prevAssignments,
      { category, playerNumber },
    ]);
    setError('');
  };

  const handleStartGame = async () => {
    if (selectedCategories.length < numberOfPlayers) {
      setError('Recuerda seleccionar una categoría distinta para cada jugador.');
    } else {
      try {
        const createdGameId = await createGame(1, numberOfPlayers); // FALTA DEFINIR USER_ID ANTES
        setGameId(createdGameId);

        for (let i = 1; i <= numberOfPlayers; i++) {
          const categoryId = selectedCategories[i - 1].id;
          await createPlayer(createdGameId, i, categoryId);
        }
        console.log('Se creó el juego y los jugadores correctamente.');
      } catch (error) {
        console.error('Error al crear el juego y los jugadores:', error);
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        setCategoryNames(categories);
      } catch (error) {
        console.error('Error getting categories:', error);
      }
    };

    fetchCategories();
    setNumberOfPlayers(2);
    setSelectedCategories([]); 
  }, []);

  return (
    <div className="block">
      <Navbar />
      <h1>Brain Royale: Crear Partida</h1>
      <img src="logos/logo.png" id="logo" width="200" height="200" />

      <div>
        <p>Selecciona el número de jugadores:</p>
        <div className="number-input">
          <button onClick={handleDecrease}>-</button>
          <input type="number" min="2" max="5" value={numberOfPlayers} readOnly />
          <button onClick={handleIncrease}>+</button>
        </div>

        <p>Selecciona las categorías para cada jugador:</p>

        {Array.from({ length: numberOfPlayers }).map((_, index) => (
          <div key={index}>
            <p>Jugador {index + 1}:</p>
            <div className="category-selection">
              <select
                value={selectedCategories[index]}
                onChange={(e) => handleCategorySelection(e.target.value, index + 1)}
              >
                {categoryNames.slice(0, -1).map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <p>Esta elección es importante porque cada jugador podrá saltarse una pregunta de su categoría una vez en la partida.  </p>
        {error && <p className="error">{error}</p>}
      </div>
      <p> </p>
      <a href='/board' onClick={handleStartGame}>
        <button>Comenzar Partida</button>
      </a>
    </div>
  );
}
