import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
  usuario: {
    type: String,
    minLength: 2,
    maxLength: 14,
    required: true,
  },
  email: {
    type: String,
    minLength: 6,
    maxLength: 256,
    required: true,
  },

  telefono: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },

  nombreMascota: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
    required: true,
  }
})

const Paciente = model('paciente', pacienteSchema)
export default Paciente;