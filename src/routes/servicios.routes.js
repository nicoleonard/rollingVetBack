import { Router } from 'express';
import { borrarServicio, crearServicio, editarServicio, obtenerServicio, obtenerServicios } from '../controllers/servicios.controllers';
import validarServicio from '../helpers/validarServicio';
import validarJWT from '../helpers/token-verify';

const router = Router();

router.route('/servicios').get(obtenerServicios).post([validarJWT ,validarServicio], crearServicio); 
router.route('/servicios/:id').get(obtenerServicio).delete(validarJWT ,borrarServicio).put([validarJWT ,validarServicio], editarServicio);
export default router;