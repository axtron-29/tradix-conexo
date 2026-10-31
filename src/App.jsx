import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'
import ProductoDetalle from './pages/ProductoDetalle' // <-- Importamos la página

function App() {
  return (
    <HashRouter>
      <Navbar />
      
      <main className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Ruta dinámica: el :id representa cualquier número de producto */}
          <Route path="/producto/:id" element={<ProductoDetalle />} /> 
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App