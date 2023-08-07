import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarServicio = [
    check("titulo")
      .notEmpty()
      .withMessage("El titulo del servicio no puede estar vacio")
      .isLength({ min: 5, max: 100 })
      .withMessage(
        "El titulo del servicio debe tener al menos 5 caracteres"
      ),    
    check("descripcion")
      .notEmpty()
      .withMessage("La descripcion del servicio no puede estar vacia")
      .isLength({ min: 12, max: 300 })
      .withMessage(
        "La descripcion del servicio debe tener al menos 12 y maximo 300 caracteres"),

    check("precio")
      .notEmpty()
      .withMessage("El precio es requerido")
      .isFloat({min: 0, max: 50000})
      .withMessage(
        "El precio minimo es 0. El precio maximo es de $50000"
      ),
    (req, res, next)=>{ resultadoValidacion(req, res, next)}
  ];

  export default validarServicio;
