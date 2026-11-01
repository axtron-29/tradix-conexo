import ContactForm from '../components/ContactForm'

function Contacto() {
  return (
    <section className="seccion-contacto">
      <div className="contacto-header">
        <h2>Conecta con nosotros</h2>
        <p>¿Dudas sobre un producto, un pedido o una colaboración? Escríbenos.</p>
      </div>

      <div className="contacto-contenido">
        <div className="contacto-info">
          <h3>Soporte Directo</h3>
          <p>WhatsApp: +57 300 000 0000</p>
          <p>Email: soporte@tradixconexo.com</p>
          <p>Ubicación: Colombia</p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Horario</h3>
            <p>Lunes a Sábado</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        {/* Aquí llamamos a nuestro componente de formulario */}
        <ContactForm />
      </div>
    </section>
  )
}

export default Contacto