import { Router } from 'express';
import { borrarServicio, crearServicio, editarServicio, obtenerServicio, obtenerServicios } from '../controllers/servicios.controllers';
import validarServicio from '../helpers/validarServicio';

const router = Router();

router.route('/servicios').get(obtenerServicios).post(validarServicio, crearServicio); 
router.route('/servicios/:id').get(obtenerServicio).delete(borrarServicio).put(validarServicio, editarServicio);
export default router;