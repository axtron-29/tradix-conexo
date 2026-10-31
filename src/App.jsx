import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      {/* Usamos HashRouter como pediste, es la mejor opción para evitar errores 404 en GitHub Pages */}
      <main>
        <Routes>
          {/* Ruta temporal para comprobar que todo funciona */}
          <Route path="/" element={<h1 style={{ textAlign: 'center', marginTop: '20vh' }}>TRADIX CONEXO</h1>} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App