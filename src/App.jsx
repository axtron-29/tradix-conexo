import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'

function App() {
  return (
    <HashRouter>
      {/* El Navbar queda fuera de Routes para que se vea en TODAS las páginas */}
      <Navbar />
      
      <main className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App