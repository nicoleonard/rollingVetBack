import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
  check("usuario")
    .notEmpty()
    .withMessage("El usuario es requerido")
    .isLength({ min: 3, max: 100 })
    .withMessage("El usuario debe tener entre 3 y 100 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ser un email valido")
    .isLength({ min: 6, max: 256 })
    .withMessage("El email debe tener entre 6 y 256 caracteres"),
  check("tipo")
    .notEmpty()
    .withMessage("El tipo es requerido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isLength({ min: 8, max: 16 })
    .withMessage("La contraseña debe tener entre 8 y 16 caracteres"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];
export default validarUsuario;
