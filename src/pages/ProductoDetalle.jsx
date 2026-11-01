import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../services/supabase'

function ProductoDetalle() {
  // useParams extrae el ID que está en la URL (ej. /producto/1)
  const { id } = useParams()
  
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // Buscamos en la tabla 'productos' donde el ID coincida con el de la URL
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('id', id)
          .single() // Usamos .single() porque solo queremos un producto exacto

        if (error) throw error
        
        setProducto(data)
      } catch (error) {
        console.error("Error al cargar detalles:", error.message)
      } finally {
        setCargando(false)
      }
    }

    fetchProducto()
  }, [id])

  if (cargando) {
    return <div style={{ textAlign: 'center', padding: '100px', color: 'var(--blanco)' }}>Cargando detalles...</div>
  }

  // Si no se encuentra el producto o hubo un error
  if (!producto) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', color: 'var(--blanco)' }}>
        <h2>Producto no encontrado</h2>
        <Link to="/catalogo" className="btn-primario" style={{ display: 'inline-block', marginTop: '20px' }}>
          Volver al Catálogo
        </Link>
      </div>
    )
  }

  // Formateamos el precio para que se vea como dinero colombiano (ej. $ 45.000)
  const precioFormateado = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(producto.precio)

  // Configuramos el enlace dinámico de WhatsApp
  const numeroWhatsApp = "573000000000" // PON TU NÚMERO REAL AQUÍ
  const mensajeWhatsApp = `Hola Tradix Conexo, me interesa el producto: ${producto.nombre} por ${precioFormateado}. ¿Aún está disponible?`
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`

  return (
    <section className="seccion-detalle" style={{ padding: '40px 5%', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
      <Link to="/catalogo" style={{ color: 'var(--gris-claro)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        &larr; Volver al catálogo
      </Link>
      
      <motion.div 
        style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', marginTop: '20px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Imagen del producto */}
        <div style={{ flex: '1 1 300px' }}>
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--borde)', objectFit: 'cover' }} 
          />
        </div>
        
        {/* Información del producto */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: 'var(--gris-claro)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
            {producto.categoria}
          </span>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: 'var(--fuente-titulos)' }}>
            {producto.nombre}
          </h1>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--blanco)', marginBottom: '20px', fontFamily: 'var(--fuente-texto)' }}>
            {precioFormateado}
          </h2>
          
          <p style={{ color: 'var(--gris-claro)', lineHeight: '1.6', marginBottom: '30px', fontFamily: 'var(--fuente-texto)' }}>
            {producto.descripcion || 'Sin descripción disponible.'}
          </p>
          
          <a 
            href={linkWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primario" 
            style={{ textAlign: 'center' }}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default ProductoDetalle