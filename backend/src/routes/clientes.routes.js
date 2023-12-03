import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
    getClients,
    createCliente,
    getCliente,
    deleteCliente,
    editCliente


} from '../controllers/clientes.controller.js'
import {ValidateSchema} from '../middlewares/validator.middleware.js'
//Esquemas de validacion
import {clientSchema} from '../schemas/client.schemas.js'


const router = Router();

router.get('/clientes', authRequired, getClients)
router.post('/clientes', authRequired, ValidateSchema(clientSchema), createCliente)
router.get('/clientes/:id', authRequired, getCliente)
router.delete('/clientes/:id', authRequired, deleteCliente)
router.put('/clientes/:id', authRequired, editCliente)

export default router;