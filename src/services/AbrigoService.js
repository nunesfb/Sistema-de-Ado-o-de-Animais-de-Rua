import { Abrigo } from '../models/Abrigo.js';

class AbrigoService {
  async listarTodos() {
    return await Abrigo.find();
  }

  async obterPorId(id) {
    return await Abrigo.findById(id);
  }

  async criar(dados) {
    return await Abrigo.create(dados);
  }

  async atualizar(id, dados) {
    return await Abrigo.findByIdAndUpdate(id, dados, { new: true });
  }

  async excluir(id) {
    return await Abrigo.findByIdAndDelete(id);
  }
}

export const abrigoService = new AbrigoService();
