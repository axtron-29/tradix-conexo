import ProductCard from '../components/ProductCard'

function Catalogo() {
  // Datos de prueba (luego esto vendrá de Supabase)
  const productosPrueba = [
    { id: 1, nombre: 'Gorra Tradix Classic', precio: 45000, categoria: 'Gorras', imagen: '' },
    { id: 2, nombre: 'AirPods Pro Alternativos', precio: 120000, categoria: 'Audífonos', imagen: '' },
    { id: 3, nombre: 'Cargador Carga Rápida 20W', precio: 35000, categoria: 'Cargadores', imagen: '' },
    { id: 4, nombre: 'Gorra Conexo Urban', precio: 50000, categoria: 'Gorras', imagen: '' },
    { id: 5, nombre: 'Cable USB-C Reforzado', precio: 25000, categoria: 'Accesorios', imagen: '' },
    { id: 6, nombre: 'Audífonos Gamer Diadema', precio: 95000, categoria: 'Audífonos', imagen: '' },
  ]

  return (
    <section className="seccion-catalogo">
      <div className="catalogo-header">
        <h2>Nuestro Catálogo</h2>
        <p>Tecnología y estilo urbano a tu alcance.</p>
      </div>

      <div className="grid-productos">
        {/* Recorremos el arreglo de productos y por cada uno, renderizamos un ProductCard */}
        {productosPrueba.map((prod) => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
    </section>
  )
}

export default Catalogo