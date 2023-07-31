import { Schema, model } from "mongoose";
/*
<td>{usuario.usuario}</td>
<td>{usuario.email}</td>
<td>{usuario.tipo}</td>
*/
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
  },
  tipo: {
    type: String,
    minLength: 1,
    maxLength: 10,
    required: true,
  },
  password: {
    type: String,
    required: true,
    //minLength: 8,
  },
});

const Usuario = model("usuario", usuariosSchema);
export default Usuario;
