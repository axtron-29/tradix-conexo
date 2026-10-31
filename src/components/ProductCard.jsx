import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Recibimos 'producto' como una prop (propiedad) desde el catálogo
function ProductCard({ producto }) {
  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Se anima cuando aparece en pantalla
      viewport={{ once: true }} // Solo se anima la primera vez que se ve
      transition={{ duration: 0.5 }}
    >
      <div className="product-image-container">
        {/* Si no hay imagen, mostramos un cuadro gris por defecto */}
        <img 
          src={producto.imagen || 'https://via.placeholder.com/300x300/141414/FFFFFF?text=FOTO'} 
          alt={producto.nombre} 
          className="product-image"
        />
        <span className="product-category">{producto.categoria}</span>
      </div>
      
      <div className="product-info">
        <h3>{producto.nombre}</h3>
        {/* Formateamos el precio para que se vea bien, ej: $ 45.000 */}
        <p className="product-price">
          $ {producto.precio.toLocaleString('es-CO')}
        </p>
        
        {/* Este botón luego nos llevará al detalle del producto */}
        <Link to={`/producto/${producto.id}`} className="btn-primario" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
          Ver Detalles
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard