import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
    check("doctor")
      .notEmpty()
      .withMessage("El nombre del doctor no puede estar vacío")    
      .isIn(['Dr. Pablo', 'Dr. Mariano']),
    check("horario")
      .notEmpty()
      .withMessage("El horario del turno no puede estar vacío"),
    (req, res, next)=>{ resultadoValidacion(req, res, next)} 
  ];

  export default validarTurno;
