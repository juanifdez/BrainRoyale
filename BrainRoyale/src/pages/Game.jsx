import Navbar from '../components/Navbar';
import './Game.css';
import axios from 'axios';

export default function Game() {

    return (

        <div className="block">
        <Navbar/>
        <h1>Mucha Suerte!</h1>
        <br />
        <img src="tableros/tablero.png" width="400" height="400"/>
        
        
        </div>
      );
}