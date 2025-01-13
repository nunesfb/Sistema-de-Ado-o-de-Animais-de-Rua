import { adotanteService } from '../services/AdotanteService.js';
import { successResponse, errorResponse } from '../utils/ApiResponse.js';
import { validateAdotante } from '../utils/AdotanteValidator.js';

class AdotanteController {
  async listarTodos(req, res) {
    try {
      const adotantes = await adotanteService.listarTodos();
      return successResponse(res, adotantes);
    } catch (error) {
      return errorResponse(res, 'Erro ao listar adotantes', error.message);
    }
  }

  async obterPorId(req, res) {
    try {
      const adotante = await adotanteService.obterPorId(req.params.id);
      if (!adotante) return errorResponse(res, 'Adotante não encontrado', null, 404);
      return successResponse(res, adotante);
    } catch (error) {
      return errorResponse(res, 'Erro ao obter adotante', error.message);
    }
  }

  async criar(req, res) {
    try {
      validateAdotante(req.body); // Valida os dados antes de criar
      const adotante = await adotanteService.criar(req.body);
      return successResponse(res, adotante, 201);
    } catch (error) {
      return errorResponse(res, 'Erro ao criar adotante', error.message);
    }
  }

  async atualizar(req, res) {
    try {
      validateAdotante(req.body); // Valida os dados antes de atualizar
      const adotante = await adotanteService.atualizar(req.params.id, req.body);
      if (!adotante) return errorResponse(res, 'Adotante não encontrado', null, 404);
      return successResponse(res, adotante);
    } catch (error) {
      return errorResponse(res, 'Erro ao atualizar adotante', error.message);
    }
  }

  async excluir(req, res) {
    try {
      const adotante = await adotanteService.excluir(req.params.id);
      if (!adotante) return errorResponse(res, 'Adotante não encontrado', null, 404);
      return successResponse(res, { message: 'Adotante removido com sucesso' });
    } catch (error) {
      return errorResponse(res, 'Erro ao excluir adotante', error.message);
    }
  }
}

export const adotanteController = new AdotanteController();
