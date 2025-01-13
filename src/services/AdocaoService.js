import { Adocao } from '../models/Adocao.js';

class AdocaoService {
  async listarTodos() {
    return await Adocao.find()
      .populate('adotante_id', 'nome email')
      .populate('animal_id', 'nome especie');
  }

  async obterPorId(id) {
    return await Adocao.findById(id)
      .populate('adotante_id', 'nome email')
      .populate('animal_id', 'nome especie');
  }

  async criar(dados) {
    return await Adocao.create(dados);
  }

  async atualizar(id, dados) {
    return await Adocao.findByIdAndUpdate(id, dados, { new: true })
      .populate('adotante_id', 'nome email')
      .populate('animal_id', 'nome especie');
  }

  async excluir(id) {
    return await Adocao.findByIdAndDelete(id);
  }
}

export const adocaoService = new AdocaoService();
