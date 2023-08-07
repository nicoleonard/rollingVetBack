import { Router } from 'express';
import { borrarPaciente, crearPaciente, editarPaciente, obtenerPacientes, obtenerPaciente } from '../controllers/pacientes.controllers';
import validarPacientes from '../helpers/validarPacientes';
import validarJWT from '../helpers/token-verify';

const router = Router();

router.route('/pacientes').get(obtenerPacientes).post([validarJWT ,validarPacientes], crearPaciente); 
router.route('/pacientes/:id').get(obtenerPaciente).delete(validarJWT ,borrarPaciente).put([validarJWT ,validarPacientes], editarPaciente);
export default router;