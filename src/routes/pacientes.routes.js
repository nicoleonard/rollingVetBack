import { Router } from 'express';
import { borrarPaciente, crearPaciente, editarPaciente, obtenerPacientes, obtenerPaciente } from '../controllers/pacientes.controllers';
import validarPacientes from '../helpers/validarPacientes';

const router = Router();

router.route('/servicios').get(obtenerPacientes).post(validarPacientes, crearPaciente); 
router.route('/servicios/:id').get(obtenerPaciente).delete(borrarPaciente).put(validarPacientes, editarPaciente);
export default router;