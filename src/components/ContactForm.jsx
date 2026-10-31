import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactForm() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  // Función que se ejecuta cada vez que el usuario escribe algo
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Función que se ejecuta al darle clic a "Enviar Mensaje"
  const handleSubmit = (e) => {
    e.preventDefault() // Evita que la página se recargue
    
    // Por ahora mostraremos una alerta. En el próximo paso esto irá a Supabase.
    alert(`Gracias ${formData.nombre}, pronto conectaremos esto a la base de datos.`)
    
    // Limpiamos el formulario después de enviar
    setFormData({ nombre: '', correo: '', mensaje: '' }) 
  }

  return (
    <motion.form 
      className="formulario-contacto"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="form-grupo">
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-grupo">
        <label htmlFor="correo">Correo Electrónico</label>
        <input 
          type="email" 
          id="correo" 
          name="correo" 
          value={formData.correo} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-grupo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea 
          id="mensaje" 
          name="mensaje" 
          rows="5" 
          value={formData.mensaje} 
          onChange={handleChange} 
          required
        ></textarea>
      </div>
      
      <button type="submit" className="btn-primario">Enviar Mensaje</button>
    </motion.form>
  )
}

export default ContactForm