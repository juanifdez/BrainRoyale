import './Game.css';
import Navbar from '../components/Navbar';
import Round from '../components/Round';

export default function Game() {
    const handleClick = () => {
      Round();
    };

    return (
    <div className="block">
    <Navbar/>
    <h1>Brain Royale</h1>
    <h2>Comunicación Backend<br></br></h2>
    <img src="logos/logo.png" id='logo' width="200" height="200"/>

    <div>
    <button onClick={handleClick}>Comenzar Simulación</button>
    </div>
    </div>
    );  
}