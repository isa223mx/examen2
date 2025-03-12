// filepath: \\wsl.localhost\Ubuntu\home\taller_4\productos\src\routers\productos.routers.ts
import { Router } from 'express';
import { getAll } from '../controllers/productos.controller';
import { checkConnection } from '../model/dbproductos';
const router = Router();

// Ruta para obtener los productos
//router.get('/', getProductos);

// Ruta para obtener todos los productos
router.get('/all', getAll);
router.get('/check-connection', checkConnection);
export default router;