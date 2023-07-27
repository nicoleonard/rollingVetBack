import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPacientes = [
  check("nombre")
    .notEmpty()
    .withMessage("El titulo del paciente no puede estar vacio")
    .isLength({ min: 2, max: 14 })
    .withMessage("El titulo del paciente debe tener al menos 2 caracteres"),

  check("apellido")
    .notEmpty()
    .withMessage("El apellido no puede estar vacia")
    .isLength({ min: 2, max: 14 })
    .withMessage(
      "El apellido del paciente debe tener al menos 2 y maximo 14 caracteres"
    ),

  check("email")
    .notEmpty()
    .withMessage("El campo email es requerido")
    .isEmail()
    .withMessage("El email no es valido"),

  check("teléfono")
    .notEmpty()
    .isMobilePhone()
    .withMessage("Debe ser un número de teléfono válido"),

  check("dirección").notEmpty().withMessage("Debe ser una direccion valida"),
  check("nombreMascota").notEmpty().withMessage("Debde ser un nombre valido"),
  check("especie").notEmpty().withMessage("Debe ser una especie valida"),
  check("raza").notEmpty().withMessage("Debe ser una raza valida"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  }
];

export default validarPacientes;
