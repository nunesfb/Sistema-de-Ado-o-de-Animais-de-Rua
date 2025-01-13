import mongoose from 'mongoose';

const AdocaoSchema = new mongoose.Schema({
  adotante_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Adotante',
    required: true,
  },
  animal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
    required: true,
  },
  data_adocao: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true, // Adiciona data_criacao e data_atualizacao automaticamente
  collection: 'adocoes', // Define explicitamente o nome da coleção no banco de dados
});

export const Adocao = mongoose.model('Adocao', AdocaoSchema);
