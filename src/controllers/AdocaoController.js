import { adocaoService } from '../services/AdocaoService.js';
import { successResponse, errorResponse } from '../utils/ApiResponse.js';
import { validateAdocao } from '../utils/AdocaoValidator.js';

class AdocaoController {
  async listarTodos(req, res) {
    try {
      const adocoes = await adocaoService.listarTodos();
      return successResponse(res, adocoes);
    } catch (error) {
      return errorResponse(res, 'Erro ao listar adoções', error.message);
    }
  }

  async obterPorId(req, res) {
    try {
      const adocao = await adocaoService.obterPorId(req.params.id);
      if (!adocao) return errorResponse(res, 'Adoção não encontrada', null, 404);
      return successResponse(res, adocao);
    } catch (error) {
      return errorResponse(res, 'Erro ao obter adoção', error.message);
    }
  }

  async criar(req, res) {
    try {
      validateAdocao(req.body); // Valida os dados antes de criar
      const adocao = await adocaoService.criar(req.body);
      return successResponse(res, adocao, 201);
    } catch (error) {
      return errorResponse(res, 'Erro ao criar adoção', error.message);
    }
  }

  async atualizar(req, res) {
    try {
      validateAdocao(req.body); // Valida os dados antes de atualizar
      const adocao = await adocaoService.atualizar(req.params.id, req.body);
      if (!adocao) return errorResponse(res, 'Adoção não encontrada', null, 404);
      return successResponse(res, adocao);
    } catch (error) {
      return errorResponse(res, 'Erro ao atualizar adoção', error.message);
    }
  }

  async excluir(req, res) {
    try {
      const adocao = await adocaoService.excluir(req.params.id);
      if (!adocao) return errorResponse(res, 'Adoção não encontrada', null, 404);
      return successResponse(res, { message: 'Adoção removida com sucesso' });
    } catch (error) {
      return errorResponse(res, 'Erro ao excluir adoção', error.message);
    }
  }
}

export const adocaoController = new AdocaoController();
