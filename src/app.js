import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import abrigoRoutes from './routes/abrigoRoutes.js';
import animalRoutes from './routes/animalRoutes.js';
import adotanteRoutes from './routes/adotanteRoutes.js';
import adocaoRoutes from './routes/adocaoRoutes.js';

dotenv.config();

const app = express();

// Conexão com o banco de dados
connectDatabase();

// Middlewares
app.use(express.json());

// Rotas
app.use('/api/abrigos', abrigoRoutes);
app.use('/api/animais', animalRoutes);
app.use('/api/adotantes', adotanteRoutes);
app.use('/api/adocoes', adocaoRoutes);

export default app;
