import Usuario from "../models/usuarios";

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

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: "El Usuario se creó correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudo crear el Usuario" });
  }
};

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
