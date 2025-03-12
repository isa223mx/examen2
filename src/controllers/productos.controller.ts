// filepath: \\wsl.localhost\Ubuntu\home\taller_4\productos\src\controllers\productos.controller.ts
import { Request, Response } from 'express';
import { createConnection } from 'mysql2';

// Configuración de la conexión
const connection = createConnection({
  host: '172.26.95.116',
  port: 3306,
  user: 'admin',
  password: 'CarlosDB!2025',
  database: 'usuarios'
});



// Controlador para obtener todos los productos
export const getAll = (req: Request, res: Response) => {
  connection.query('SELECT * FROM productos', (err, results, fields) => {
    if (err) {
      console.error('Error en la consulta 14244:', err.stack);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
};