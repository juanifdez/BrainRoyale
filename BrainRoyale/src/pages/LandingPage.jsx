import './LandingPage.css';
//import Navbar from '../components/Navbar';
import LogoutButton from '../profile/Logout';
import NavbarLanding from '../components/NavbarLanding';
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import AuthProvider from '../auth/AuthProvider';

export default function LandingPage() {

    return (

        <div className="block">
        <NavbarLanding/>
        <img src="logos/logo.png" width="100" height="100"/>
        <h1>Bienvenido a Brain Royale</h1>
        <p>¡Prepárate para el juego de preguntas trivia más divertido del año!</p>
        <br />
        <img src="tableros/tablero.png" width="400" height="400"/>
        <br />
        <br />
        {/* <ul id='users'>
            {token ? (<LogoutButton/>// if the token exists, show nothing
            
          ) : 
          (   <>
            <li>
              <button>
                <a href="/login">Iniciar sesión</a>
              </button>
            </li>
            <li>
              <button>
                <a href="/signup">Crear cuenta</a>
              </button>
            </li>     
            </>
          )}
        </ul> */}

        <button> <a href='/game'>Jugar</a></button>
        <br />
        </div>
      );
}