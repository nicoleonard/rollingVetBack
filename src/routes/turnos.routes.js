import { Router } from 'express';
import { obtenerTurnos, actualizarTurno, obtenerTurno, inicializarTurno, borrarTurnos,inicializarTurnos } from '../controllers/turnos.controllers';
import validarTurno from '../helpers/validarTurno';
import validarJWT from '../helpers/token-verify';

const router = Router();

router.route('/turnos').get(obtenerTurnos).delete(validarJWT ,borrarTurnos); 
router.route('/turnos/:id').get(obtenerTurno).put([validarJWT ,validarTurno], actualizarTurno)
router.route('/').post(validarJWT ,inicializarTurnos);
router.route('/:id').put(validarJWT ,inicializarTurno);
export default router;