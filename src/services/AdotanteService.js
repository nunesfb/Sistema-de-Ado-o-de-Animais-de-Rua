import { Adotante } from '../models/Adotante.js';

class AdotanteService {
  async listarTodos() {
    return await Adotante.find();
  }

  async obterPorId(id) {
    return await Adotante.findById(id);
  }

  async criar(dados) {
    return await Adotante.create(dados);
  }

  async atualizar(id, dados) {
    return await Adotante.findByIdAndUpdate(id, dados, { new: true });
  }

  async excluir(id) {
    return await Adotante.findByIdAndDelete(id);
  }
}

export const adotanteService = new AdotanteService();
