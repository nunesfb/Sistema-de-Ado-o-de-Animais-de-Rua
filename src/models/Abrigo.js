import mongoose from 'mongoose';

const AbrigoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  endereco: {
    type: String,
    required: true,
    trim: true,
  },
  telefone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
}, {
  timestamps: true,
  collection: 'abrigos', // Define explicitamente o nome da coleção no banco de dados
});

export const Abrigo = mongoose.model('Abrigo', AbrigoSchema);
