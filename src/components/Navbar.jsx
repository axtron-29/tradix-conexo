import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          {/* Aquí cargamos tu logo. Al estar en la carpeta public, Vite lo encuentra desde la raíz (/) */}
          <img src="./img/logo.png" alt="Tradix Conexo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar