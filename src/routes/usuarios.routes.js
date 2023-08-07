import { Router } from 'express';
import { login, obtenerUsuarios, obtenerUsuario, crearUsuario, borrarUsuario, editarUsuario } from '../controllers/usuarios.controllers';
//aqui van las validaciones del usuario
import validarUsuario from '../helpers/validarUsuario';
import validarJWT from '../helpers/token-verify';

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post([validarJWT ,validarUsuario], crearUsuario); 
router.route('/usuarios/:id').get(obtenerUsuario).delete(validarJWT ,borrarUsuario).put([validarJWT ,validarUsuario], editarUsuario);
router.route('/').post(login)
export default router;