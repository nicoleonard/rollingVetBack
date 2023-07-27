import {Schema, model} from 'mongoose'

const pacienteSchema = new Schema({
    nombre: {
        type: String,
        minLength: 2,
        maxLength: 14,
        required: true,
        unique: true
    },
    apellido: {
        type: String,
        minLength: 2,
        maxLength: 14,
        required: true,
    },
    email: {
        type: String,
        required: true,
      },
      teléfono: {
        type: Number,
        min: 9,
        max: 14,
        required: true,
      },
      dirección: {
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
        type:String,
        required: true,
      }
})

const Paciente = model('servicio', pacienteSchema)
export default Paciente;