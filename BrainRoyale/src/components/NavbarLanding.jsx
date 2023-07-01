import './Navbar.css'

export default function NavbarLanding() {
    return(
    <div className="block-nav">
        <div className="nav">
        <nav className="nav-general">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/app">Principal</a></li>
                <li><a href="/rulespage">Instrucciones</a></li>
                <li><a href="/teampage">Equipo</a></li>
            </ul>

            <ul id='users'>
                <li><button><a href="/login">Iniciar sesión</a></button></li>
                <li><button><a href="/signup">Crear cuenta</a></button></li>
            </ul>
        </nav>
        </div>
    </div>


        );
}