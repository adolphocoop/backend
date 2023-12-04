import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//importamos las rutas para los usuarios
import authRoutes from './routes/auth.routes.js'
//Importamos las rutas para productos
import productRoutes from './routes/products.routes.js';
//Importamos las rutas para proveedores
import provedorRoutes from './routes/provedores.routes.js'
//Rutas de los clientes
import clientesRoutes from './routes/clientes.routes.js'


const app = express();
app.use(cors({
   origin: [
      'http://localhost:5173',
      'https://terfrontend.onrender.com'
   ],
   
   
   
   credentials: true
}));

   
   credentials: true 
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Se indica al servidor que utilice el objeto authRoutes
app.use('/api/', authRoutes);
app.use('/api/', productRoutes);
app.use('/api/', provedorRoutes);
app.use('/api/', clientesRoutes)

export default app;
