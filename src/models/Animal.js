import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  especie: {
    type: String,
    required: true,
    trim: true,
    enum: ['cachorro', 'gato'], // Apenas valores permitidos
  },
  raca: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  idade: {
    type: Number,
    required: true,
    min: 0, // Idade mínima de 0 anos
  },
  sexo: {
    type: String,
    required: true,
    enum: ['macho', 'fêmea'], // Apenas valores permitidos
  },
  descricao: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  abrigo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Abrigo',
    required: true,
  },
}, {
  timestamps: true, // Adiciona data_criacao e data_atualizacao
  collection: 'animais', // Define explicitamente o nome da coleção no banco de dados
});

export const Animal = mongoose.model('Animal', AnimalSchema);
