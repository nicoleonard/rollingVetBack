import {Schema, model} from 'mongoose'

const pacienteSchema = new Schema({
    nombre: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        unique: true
    },
    apellido: {
        type: String,
        minLength: 12,
        maxLength: 300,
        required: true,
    },
    email: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      },
      teléfono: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      },
      dirección: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      },
      nombreMascota: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      },
      especie: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      },
      raza: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      }
})

const Paciente = model('servicio', pacienteSchema)
export default Paciente;