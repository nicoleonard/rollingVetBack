import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, crearUsuario, borrarUsuario, editarUsuario } from '../controllers/usuarios.controllers';
import validarUsuario from '../helpers/validarUsuario';
//aqui van las validaciones del usuario
//import validarServicio from '../helpers/validarServicio';

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post(validarUsuario(usuario), crearUsuario); 
router.route('/usuarios/:id').get(obtenerUsuario).delete(borrarUsuario).put(validarUsuario(usuario), editarUsuario);
export default router;