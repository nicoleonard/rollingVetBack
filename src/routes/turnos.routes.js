import { Router } from 'express';
import { obtenerTurnos, borrarTurno, crearTurno, editarTurno, obtenerTurno, inicializarTurno, borrarTurnos,inicializarTurnos } from '../controllers/turnos.controllers';
import validarTurno from '../helpers/validarTurno';

const router = Router();

router.route('/turnos').get(obtenerTurnos).post(validarTurno, crearTurno).delete(borrarTurnos); 
router.route('/turnos/:id').get(obtenerTurno).delete(borrarTurno).put(validarTurno, editarTurno)
router.route('/').post(inicializarTurnos);
router.route('/:id').put(inicializarTurno);
export default router;