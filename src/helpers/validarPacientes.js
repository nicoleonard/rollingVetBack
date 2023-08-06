import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPacientes = [
  check("usuario")
    .notEmpty()
    .withMessage("El nombre de usuario no puede estar vacio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre de usuario debe tener al menos 2 caracteres"),

    check("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ser un email valido")
    .isLength({ min: 6, max: 256 })
    .withMessage("El email debe tener entre 6 y 256 caracteres"),

  check("telefono")
    .notEmpty()
    .isLength({ min: 9, max: 15 })
    .isMobilePhone()
    .withMessage("Debe ser un número de teléfono válido"),

  check("direccion")
  .notEmpty()
  .isLength({ min: 5, max: 50 })
  .withMessage("Debe ser una direccion valida"),

  check("nombreMascota")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("El nombre de la mascota debe tener entre 2 y 30 caracteres"),

  check("especie")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("El nombre de la especie debe tener entre 2 y 30 caracteres"),

  check("raza")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("El nombre de la raza debe tener entre 2 y 30 caracteres"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarPacientes;
