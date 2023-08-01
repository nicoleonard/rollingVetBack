import { Schema, model } from "mongoose";

const usuariosSchema = new Schema({
  usuario: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minLength: 12,
    maxLength: 300,
    required: true,
    unique: true
  },
  tipo: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
});

const Usuario = model("usuario", usuariosSchema);
export default Usuario;
