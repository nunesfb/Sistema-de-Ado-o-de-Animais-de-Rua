import mongoose from 'mongoose';

const AdotanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 100,
  },
  telefone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
  },
  endereco: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
}, {
  timestamps: true, // Adiciona data_criacao e data_atualizacao automaticamente
  collection: 'adotantes', // Define explicitamente o nome da coleção no banco de dados
});

export const Adotante = mongoose.model('Adotante', AdotanteSchema);
