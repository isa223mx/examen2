import { Request, Response } from 'express';
import mysql, { Pool } from 'mysql2/promise';

// Crear un pool de conexiones
export const pool: Pool = mysql.createPool({
  host: 'conect_wsl', // Cambia esto si tu base de datos no está en localhost
  user: 'admin', // Reemplaza con tu usuario de MySQL
  password: 'CarlosDB!2025', // Reemplaza con tu contraseña de MySQL
  database: 'usuarios' // Reemplaza con el nombre de tu base de datos
});

// Función para verificar la conexión
export const checkConnection = async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    res.send('Conexión a la base de datos establecida correctamente');
  } catch (err) {
    console.error('Error conectando a la base de datos:', err);
    res.status(500).send('Error conectando a la base de datos');
  }
};