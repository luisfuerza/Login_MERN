
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';


const app = express();
//empezamo a enviar solicitudes
app.use(express.json());//reconoce solicitudes
app.use(morgan('dev'));
app.use("/api",authRoutes);//reconoce rutas


export default app;

