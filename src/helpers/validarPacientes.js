import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPacientes = [
  check("nombre")
    .notEmpty()
    .withMessage("El titulo del paciente no puede estar vacio")
    .isLength({ min: 2, max: 30 })
    .withMessage("El nombre del paciente debe tener al menos 2 caracteres"),

  check("apellido")
    .notEmpty()
    .withMessage("El apellido no puede estar vacia")
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "El apellido del paciente debe tener al menos 2 y maximo 14 caracteres"
    ),

  check("email")
    .notEmpty()
    .withMessage("El campo email es requerido")
    .isLength({ min: 4, max: 64 })
    .isEmail()
    .withMessage("El email no es valido"),

  check("teléfono")
    .notEmpty()
    .isLength({ min: 9, max: 15 })
    .isMobilePhone()
    .withMessage("Debe ser un número de teléfono válido"),

  check("dirección")
  .notEmpty()
  .isLength({ min: 5, max: 50 })
  .withMessage("Debe ser una direccion valida"),

  check("nombreMascota")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("Debde ser un nombre valido"),

  check("especie")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("Debe ser una especie valida"),

  check("raza")
  .notEmpty()
  .isLength({ min: 2, max: 30 })
  .withMessage("Debe ser una raza valida"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarPacientes;
