import { abrigoService } from '../services/AbrigoService.js';
import { successResponse, errorResponse } from '../utils/ApiResponse.js';
import { validateAbrigo } from '../utils/AbrigoValidator.js';

class AbrigoController {
  async listarTodos(req, res) {
    try {
      const abrigos = await abrigoService.listarTodos();
      return successResponse(res, abrigos);
    } catch (error) {
      return errorResponse(res, 'Erro ao listar abrigos', error);
    }
  }

  async obterPorId(req, res) {
    try {
      const abrigo = await abrigoService.obterPorId(req.params.id);
      if (!abrigo) return errorResponse(res, 'Abrigo não encontrado', null, 404);
      return successResponse(res, abrigo);
    } catch (error) {
      return errorResponse(res, 'Erro ao obter abrigo', error);
    }
  }

  async criar(req, res) {
    try {
      validateAbrigo(req.body); // Valida os dados antes de criar
      const abrigo = await abrigoService.criar(req.body);
      return successResponse(res, abrigo, 201);
    } catch (error) {
      return errorResponse(res, 'Erro ao criar abrigo', error.message);
    }
  }

  async atualizar(req, res) {
    try {
      validateAbrigo(req.body); // Valida os dados antes de atualizar
      const abrigo = await abrigoService.atualizar(req.params.id, req.body);
      if (!abrigo) return errorResponse(res, 'Abrigo não encontrado', null, 404);
      return successResponse(res, abrigo);
    } catch (error) {
      return errorResponse(res, 'Erro ao atualizar abrigo', error.message);
    }
  }

  async excluir(req, res) {
    try {
      const abrigo = await abrigoService.excluir(req.params.id);
      if (!abrigo) return errorResponse(res, 'Abrigo não encontrado', null, 404);
      return successResponse(res, { message: 'Abrigo removido com sucesso' });
    } catch (error) {
      return errorResponse(res, 'Erro ao excluir abrigo', error);
    }
  }
}

export const abrigoController = new AbrigoController();
