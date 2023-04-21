import './RulesPage.css'

export default function RulesPage() {
    return (
        <div class="block">
        <h1>Instrucciones</h1>
        <p>Cada jugador debe elegir una ficha de color. Es importante porque podrá saltarse una pregunta del color de su ficha una vez en la partida. </p>
        <img src="fichas/ficha_verde.png" width="50" height="50"/>
        <img src="fichas/ficha_naranja.png" width="50" height="50"/>
        <img src="fichas/ficha_morada.png" width="50" height="50"/>
        <img src="fichas/ficha_azul.png" width="50" height="50"/>
        <img src="fichas/ficha_rosada.png" width="50" height="50"/>
        <p>A continuación, comienza el juego y la persona que parte debe lanzar los dados para avanzar en el tablero.  </p>
        <img src="tableros/tablero.png" width="450" height="400"/>
        <p>El jugador debe responder a una pregunta de la categoría en la que haya caído.</p>
        <img src="logos/logo_ciencias.png" width="80" height="80"/>
        <img src="logos/logo_deportes.png" width="80" height="80"/>
        <img src="logos/logo_artes.png" width="80" height="80"/>
        <img src="logos/logo_historia.png" width="80" height="80"/>
        <img src="logos/logo_matematicas.png" width="80" height="80"/>
        <p> Si la respuesta es correcta, el jugador vuelve a lanzar los dados, de lo contrario, permanece en su posición y es el turno del siguiente jugador.  </p>
        <img src="dados.png" width="90" height="90"/>
        <p>Si el jugador cae en la casilla cerebro, gana una ficha cerebro que puede usar en cualquier momento del juego para saltar una pregunta de cualquier categoría.  </p>
        <img src="logos/logo_cerebro.png" width="80" height="80"/>
        <img src="fichas/fichas_cerebro.png" width="90" height="80"/>
        <p>Si un jugador llega al final del tablero, ha ganado el juego. </p>
        <img src="copa.png" width="110" height="100"/>

        </div>
      );
}