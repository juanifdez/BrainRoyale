import './Board.css';
import Navbar from '../components/Navbar';
import {
    getBoard,
    getCard,
    createUser,
    getUsers,
    getUser,
    getGame,
    updateGame,
    getPlayer,
    updatePosition,
    updateBrains,
    updateSkip
  } from '../Comunications';

export default function Board() {

    return (
        <div className="block">
        <Navbar/>
        <h1>Partida</h1>
        <img src="tableros/tablero_partida.png" width="700" height="500"/>
        </div>
      );
}