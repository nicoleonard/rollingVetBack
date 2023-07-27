import { Router } from 'express';
import { borrarPaciente, crearPaciente, editarPaciente, obtenerPacientes, obtenerPaciente } from '../controllers/pacientes.controllers';
import validarPacientes from '../helpers/validarPacientes';

const router = Router();

router.route('/pacientes').get(obtenerPacientes).post(validarPacientes, crearPaciente); 
router.route('/pacientes/:id').get(obtenerPaciente).delete(borrarPaciente).put(validarPacientes, editarPaciente);
export default router;