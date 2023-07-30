import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
    check("veterinario")
      .notEmpty()
      .withMessage("El nombre del veterinario no puede estar vacío")    
      .isIn(['Dr. Pablo', 'Dr. Mariano']),
    check("hora")
      .notEmpty()
      .withMessage("El horario del turno no puede estar vacío"),
      check("detalleCita")
      .notEmpty()
      .withMessage("El detalle del turno no puede estar vacío")
      .isLength({ min: 2, max: 500 })
      .withMessage(
        "El detalle de la cita debe tener entre 2 y 500 caracteres"
      ),
      check("paciente")
      .notEmpty()
      .withMessage("El nombre del paciente no puede estar vacío"),
      check("fecha")
      .notEmpty()
      .withMessage("La fecha del turno no puede estar vacía"),
      check("usuario")
      .notEmpty()
      .withMessage("El usuario del turno no puede estar vacío"),
    (req, res, next)=>{ resultadoValidacion(req, res, next)} 
  ];

  export default validarTurno;
