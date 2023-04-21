import './App.css';
import Navbar from './Navbar';

export default function App() {
  return (

      <div className="block">
      <Navbar/>
      <h1>Brain Royale</h1>
      <h2>Página Principal<br></br></h2>
      <img src="logo.png" id='logo' width="200" height="200"/>
      <p id='p-app'> Esto es <b>¡Brain Royale! </b> Te damos la bienvenida al juego de inteligencia que viene a revolucionar el mercado de juegos este año. Basado en el conocimiento de las mentes más brillantes del mundo, Brain Royale reúne lo mejor de los juegos de mesa y de la trivia.
      El objetivo del juego es llegar al final del tablero, para esto deberás pasar por múltiples casillas respondiendo correctamente preguntas de diferentes categorías, como ciencias, deportes, arte, historia y matemáticas.</p>

      <h2>Haz click en jugar!</h2>
      <button className='buttonplay'>Jugar</button>


      <h2>Estadísticas de preguntas según categoría</h2> 
      <img src='stats.png' id='stats' width="800" height="auto"/>

      </div>
    );
}



