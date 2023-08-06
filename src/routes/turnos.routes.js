import { Router } from 'express';
import { obtenerTurnos, actualizarTurno, obtenerTurno, inicializarTurno, borrarTurnos,inicializarTurnos } from '../controllers/turnos.controllers';
import validarTurno from '../helpers/validarTurno';

const router = Router();

router.route('/turnos').get(obtenerTurnos).delete(borrarTurnos); 
router.route('/turnos/:id').get(obtenerTurno).put(validarTurno, actualizarTurno)
router.route('/').post(inicializarTurnos);
router.route('/:id').put(inicializarTurno);
export default router;