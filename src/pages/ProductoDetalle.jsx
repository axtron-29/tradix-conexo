import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProductoDetalle() {
  // Extraemos el ID de la URL
  const { id } = useParams()

  // Datos de prueba ampliados (luego vendrán de Supabase)
  const productosPrueba = [
    { 
      id: 1, 
      nombre: 'Gorra Tradix Classic', 
      precio: 45000, 
      categoria: 'Gorras', 
      imagen: '',
      descripcion: 'Gorra de ala plana con el logo de Tradix bordado en 3D. Ajustable y diseñada para el uso diario en la ciudad.',
      caracteristicas: ['Material: 100% Algodón', 'Cierre ajustable tipo Snapback', 'Bordado frontal de alta densidad']
    },
    // Añadimos un producto genérico para que no falle si probamos otros IDs
    { 
      id: 99, 
      nombre: 'Producto Tecnológico', 
      precio: 120000, 
      categoria: 'Tecnología', 
      imagen: '',
      descripcion: 'Alta tecnología con el mejor diseño urbano.',
      caracteristicas: ['Calidad Premium', 'Garantía de 3 meses']
    }
  ]

  // Buscamos el producto. Si no lo encuentra, usamos el genérico (id 99)
  const producto = productosPrueba.find(p => p.id === parseInt(id)) || productosPrueba[1]

  // Número de prueba para WhatsApp (luego lo haremos dinámico o usarás el tuyo)
  const numeroWhatsApp = "573000000000" 
  const mensajeWa = `Hola Tradix Conexo, me interesa el producto: ${producto.nombre} por $${producto.precio.toLocaleString('es-CO')}.`
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWa)}`

  return (
    <motion.div 
      className="detalle-producto-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/catalogo" className="btn-volver">← Volver al Catálogo</Link>

      <div className="detalle-grid">
        <div className="detalle-imagen-wrapper">
          <img 
            src={producto.imagen || 'https://via.placeholder.com/600x600/141414/FFFFFF?text=FOTO+DETALLE'} 
            alt={producto.nombre} 
            className="detalle-imagen"
          />
        </div>

        <div className="detalle-info">
          <span className="detalle-categoria">{producto.categoria}</span>
          <h2>{producto.nombre}</h2>
          <p className="detalle-precio">$ {producto.precio.toLocaleString('es-CO')}</p>
          
          <div className="detalle-descripcion">
            <p>{producto.descripcion}</p>
          </div>

          <div className="detalle-caracteristicas">
            <h3>Características:</h3>
            <ul>
              {producto.caracteristicas.map((caract, index) => (
                <li key={index}>{caract}</li>
              ))}
            </ul>
          </div>

          <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="btn-primario btn-comprar">
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductoDetalle