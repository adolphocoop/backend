import {Router} from 'express'

import { authRequired } from '../middlewares/validateToken.js';

import {
    getProves,
    createProve,
    getProve,
    deleteProve,
    editProve

} from '../controllers/provedor.controller.js'
import { ValidateSchema } from '../middlewares/validator.middleware.js';
import { provedorSchema } from '../schemas/provedor.schema.js';

const router = Router();
//Obtener todos los proveedores
router.get ('/provedores', authRequired,  getProves)
//Agregar un Proveedor
router.post('/provedores', authRequired, ValidateSchema(provedorSchema), createProve);
//Obtener un Proveedor
router.get ('/provedores/:id',authRequired, getProve)
//Eliminar Provedor
router.delete('/provedores/:id', authRequired, deleteProve)
//Actualizar datos del Proveedor
router.put('/provedores/:id',authRequired, editProve)






export default router;