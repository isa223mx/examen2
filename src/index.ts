// filepath: \\wsl.localhost\Ubuntu\home\taller_4\productos\src\index.ts
import express, { Request, Response } from 'express';
import productosRouter from './routers/productos.routers';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, bienvenido usuario!');
});

app.use(express.json());
app.use('/productos', productosRouter);

app.listen(port, () => {
  console.log(`Escuchando en el puerto: ${port}`);
});