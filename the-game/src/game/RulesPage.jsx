import './RulesPage.css'
import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../common/Navbar'
library.add(fas)

export default function RulesPage() 
{
    return (
        <div class="block">
        <Navbar/>
        <h1>Instrucciones</h1>
        <p>Cada jugador debe elegir una ficha de color. Es importante porque podrá saltarse una pregunta del color de su ficha una vez en la partida. </p>
        <img src="fichas/ficha_verde.png" width="80" height="80"/>
        <img src="fichas/ficha_naranja.png" width="80" height="80"/>
        <img src="fichas/ficha_morada.png" width="80" height="80"/>
        <img src="fichas/ficha_azul.png" width="80" height="80"/>
        <img src="fichas/ficha_rosada.png" width="80" height="80"/>
        <p>A continuación, comienza el juego y la persona que parte debe lanzar los dados para avanzar en el tablero.  </p>
        {/* El código para el siguiente componente se obtuvo de: https://www.geeksforgeeks.org/how-to-create-a-dice-rolling-app-using-reactjs/ */}
        <RollDice />
        <img src="tableros/tablero_sin_dados.png" width="450" height="300"/>
        <p>El jugador debe responder a una pregunta de la categoría en la que haya caído.</p>
        <img src="logos/logo_ciencias.png" width="80" height="80"/>
        <img src="logos/logo_deportes.png" width="80" height="80"/>
        <img src="logos/logo_artes.png" width="80" height="80"/>
        <img src="logos/logo_historia.png" width="80" height="80"/>
        <img src="logos/logo_matematicas.png" width="80" height="80"/>
        <p> Si la respuesta es correcta, el jugador vuelve a lanzar los dados, de lo contrario, permanece en su posición y es el turno del siguiente jugador.</p>
        <img src="jugadores.png" width="500" height="500"/>
        <p>Si el jugador cae en la casilla cerebro, gana una ficha cerebro que puede usar en cualquier momento del juego para saltar una pregunta de cualquier categoría.  </p>
        <img src="logos/logo_cerebro.png" width="80" height="80"/>
        <img src="fichas/fichas_cerebro.png" width="120" height="100"/>
        <p>Si un jugador llega al final del tablero, ha ganado el juego. </p>

        </div>
      );
}