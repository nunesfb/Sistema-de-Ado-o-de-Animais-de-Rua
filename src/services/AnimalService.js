import { Animal } from '../models/Animal.js';

class AnimalService {
  async listarTodos() {
    return await Animal.find().populate('abrigo_id', 'nome endereco');
  }

  async obterPorId(id) {
    return await Animal.findById(id)
      .populate('abrigo_id', 'nome endereco telefone email') // Popula informações do abrigo
  }

  async criar(dados) {
    return await Animal.create(dados);
  }

  async atualizar(id, dados) {
    return await Animal.findByIdAndUpdate(id, dados, { new: true });
  }

  async excluir(id) {
    return await Animal.findByIdAndDelete(id);
  }
}

export const animalService = new AnimalService();
