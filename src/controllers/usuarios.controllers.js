import Usuario from "../models/usuarios";
import bcrypt from 'bcrypt'
import generarJWT from "../helpers/token-sign";

export const login = async(req, res)=>{
  try {
      const {email, clave} = req.body;
      let usuarioEncontrado = await Usuario.findOne({email});
      if(!usuarioEncontrado){
          return res.status(404).json({
              mensaje: 'Email o contraseña invalido'
          })
      }

      const claveValida = bcrypt.compareSync(clave, usuarioEncontrado.clave)

      if(!claveValida){
          return res.status(400).json({
              mensaje: 'Email o contraseña invalido'
          })
      }
      const token = await generarJWT(usuarioEncontrado.tipo, usuarioEncontrado.usuario)
      res.status(200).json({
          mensaje:'Login exitoso',
          usuario: usuarioEncontrado.usuario,
          tipo: usuarioEncontrado.tipo,
          token
      })
  } catch (error) {
      console.log(error)
      res.status(404).json('Error al loguear un usuario');
  }
}

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudo buscar los/el usuarios" });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id, req.body);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo encontrar el usuario" });
  }
};

export const crearUsuario = async (req,res)=>{
  try{
      let usuarioUsado = await Usuario.findOne({usuario: req.body.usuario});
      if(usuarioUsado){
          return res.status(400).json({ mensaje: 'El nombre de usuario no esta disponible'})
      }
      let emailUsado = await Usuario.findOne({email: req.body.email});
      if(emailUsado){
          return res.status(400).json({ mensaje: 'Ya existe un usuario con el correo enviado'})
      }
      const nuevoUsuario = new Usuario(req.body)
      const sal= bcrypt.genSaltSync(10)
      nuevoUsuario.clave = bcrypt.hashSync(nuevoUsuario.clave, sal)
      await nuevoUsuario.save()
      res.status(201).json({mensaje: 'El usuario se creó correctamente'})
  } catch (error){
      console.log(error)
      res.status(404).json({mensaje: 'No se pudo crear el usuario'})
  }
}


export const borrarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "El Usuario se borró correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudo borrar el Usuario" });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El Usuario se editó correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "No se pudo modificar el Usuario" });
  }
};
