import './LandingPage.css'

export default function LandingPage() {
    return (
        <div class="block">
        <img src="logo.png" width="100" height="100"/>
        <h1>Bienvenido a The Game</h1>
        <p>¡Prepárate para el juego de preguntas trivia más divertido del año!</p>
        <br />
        <img src="tableros/tablero.png" width="400" height="400"/>
        <br />
        <br />
        <button>Jugar</button>
        <br />
        <p>Iniciar sesión <a href="#">Sign in</a></p>
        <p>Crear cuenta <a href="#">Sign up</a></p>
        </div>
      );
}