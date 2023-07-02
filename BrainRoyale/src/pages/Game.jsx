import React, { useState } from 'react';
import Players from './Players';
import Board from './Board';

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameId, setGameId] = useState(null);

  const handleStartGame = (id) => {
    setGameStarted(true);
    setGameId(id);
  };

  return (
    <div className="block">
      {!gameStarted ? (
        <Players onStartGame={handleStartGame} />
      ) : (
        <Board gameId={gameId} />
      )}
    
    <button className="returnButton">
        <a href='/'>Volver al Inicio</a>
    </button>
    </div>
  );
}
