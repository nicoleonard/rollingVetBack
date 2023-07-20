import {Schema, model} from 'mongoose'

const servicioSchema = new Schema({
    titulo: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        minLength: 12,
        maxLength: 300,
        required: true,
    },
    precio: {
        type: Number,
        min: 0,
        max: 50000,
        required: true,
      }
})

const Servicio = model('servicio', servicioSchema)
export default Servicio;