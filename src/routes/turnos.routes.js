import { Router } from 'express';
import { obtenerTurnos, borrarTurno, crearTurno, editarTurno, obtenerTurno } from '../controllers/turnos.controllers';
import validarTurno from '../helpers/validarTurno';

const router = Router();

router.route('/turnos').get(obtenerTurnos).post(validarTurno, crearTurno); 
router.route('/turnos/:id').get(obtenerTurno).delete(borrarTurno).put(validarTurno, editarTurno);

export default router;