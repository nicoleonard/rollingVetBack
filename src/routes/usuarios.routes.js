import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, crearUsuario, borrarUsuario, editarUsuario } from '../controllers/usuarios.controllers';
//aqui van las validaciones del usuario
//import validarServicio from '../helpers/validarServicio';

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post(/*validarServicio(usuario),*/ crearUsuario); 
router.route('/usuarios/:id').get(obtenerUsuario).delete(borrarUsuario).put(/*validarServicio,*/ editarUsuario);
export default router;