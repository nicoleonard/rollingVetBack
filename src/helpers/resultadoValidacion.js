import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){ //si existen errores, se devuelve estado de error y un array que contiene los errores
      return res.status(400).json({
        errores: errors.array()
      })
    };
    next(); // si no, sigue con la ejecucion 
}

export default resultadoValidacion;
