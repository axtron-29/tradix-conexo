import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../services/supabase'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })
  
  const [enviando, setEnviando] = useState(false)
  const [estadoMensaje, setEstadoMensaje] = useState({ tipo: '', texto: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setEstadoMensaje({ tipo: '', texto: '' }) 
    
    try {
      const { error } = await supabase
        .from('mensajes')
        .insert([
          { 
            nombre: formData.nombre, 
            correo: formData.correo, 
            mensaje: formData.mensaje 
          }
        ])

      if (error) throw error 

      setEstadoMensaje({ tipo: 'exito', texto: '¡Mensaje enviado correctamente! Te contactaremos pronto.' })
      setFormData({ nombre: '', correo: '', mensaje: '' }) 

    } catch (error) {
      console.error("Error al enviar mensaje:", error.message)
      setEstadoMensaje({ tipo: 'error', texto: 'Hubo un error al enviar el mensaje. Intenta de nuevo.' })
    } finally {
      setEnviando(false)
    }
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
          disabled={enviando}
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
          disabled={enviando}
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
          disabled={enviando}
        ></textarea>
      </div>
      
      {estadoMensaje.texto && (
        <p style={{ 
          color: estadoMensaje.tipo === 'exito' ? '#4ade80' : '#f87171', 
          fontFamily: 'var(--fuente-texto)',
          fontSize: '0.9rem'
        }}>
          {estadoMensaje.texto}
        </p>
      )}
      
      <button type="submit" className="btn-primario" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </motion.form>
  )
}

export default ContactForm