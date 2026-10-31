import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      {/* motion.div nos permite animar este contenedor al cargar la página */}
      <motion.div 
        className="hero-contenido"
        initial={{ opacity: 0, y: 30 }} // Empieza invisible y un poco más abajo
        animate={{ opacity: 1, y: 0 }}  // Termina visible y en su posición original
        transition={{ duration: 0.8 }}  // Tarda 0.8 segundos en hacer la animación
      >
        <img src="./img/logo.png" alt="Logo Tradix Conexo" className="hero-logo-grande" />
        
        <h1>Conexión Urbana</h1>
        <p className="hero-texto">
          Streetwear de alto nivel y tecnología de punta. Gorras exclusivas, AirPods y accesorios diseñados para tu estilo de vida.
        </p>
        
        <div className="hero-botones">
          <Link to="/catalogo" className="btn-primario">Ver Catálogo</Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero