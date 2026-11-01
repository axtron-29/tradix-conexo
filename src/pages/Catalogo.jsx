import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { supabase } from '../services/supabase'

function Catalogo() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        
        setProductos(data)
      } catch (error) {
        console.error("Error al cargar el catálogo:", error.message)
      } finally {
        setCargando(false)
      }
    }

    fetchProductos()
  }, [])

  return (
    <section className="seccion-catalogo" style={{ padding: '40px 5%', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Catálogo Tradix Conexo</h2>
        <p style={{ color: 'var(--gris-claro)', fontFamily: 'var(--fuente-texto)' }}>
          Streetwear y Tecnología.
        </p>
      </div>
      
      {cargando ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: 'var(--blanco)', fontSize: '1.2rem' }}>Cargando colección...</p>
        </div>
      ) : productos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: 'var(--gris-claro)' }}>Pronto añadiremos nuevos productos al catálogo.</p>
        </div>
      ) : (
        <motion.div 
          className="grid-productos" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '30px' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {productos.map((prod) => (
            <ProductCard 
              key={prod.id} 
              producto={prod} 
            />
          ))}
        </motion.div>
      )}
    </section>
  )
}

export default Catalogo