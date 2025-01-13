import { animalService } from '../services/AnimalService.js';
import { successResponse, errorResponse } from '../utils/ApiResponse.js';
import { validateAnimal } from '../utils/AnimalValidator.js';

class AnimalController {
  async listarTodos(req, res) {
    try {
      const animais = await animalService.listarTodos();
      return successResponse(res, animais);
    } catch (error) {
      return errorResponse(res, 'Erro ao listar animais', error.message);
    }
  }

  async obterPorId(req, res) {
    try {
      const animal = await animalService.obterPorId(req.params.id);
      if (!animal) return errorResponse(res, 'Animal não encontrado', null, 404);
      return successResponse(res, animal);
    } catch (error) {
      return errorResponse(res, 'Erro ao obter animal', error.message);
    }
  }

  async criar(req, res) {
    try {
      validateAnimal(req.body); // Valida os dados antes de criar
      const animal = await animalService.criar(req.body);
      return successResponse(res, animal, 201);
    } catch (error) {
      return errorResponse(res, 'Erro ao criar animal', error.message);
    }
  }

  async atualizar(req, res) {
    try {
      validateAnimal(req.body); // Valida os dados antes de atualizar
      const animal = await animalService.atualizar(req.params.id, req.body);
      if (!animal) return errorResponse(res, 'Animal não encontrado', null, 404);
      return successResponse(res, animal);
    } catch (error) {
      return errorResponse(res, 'Erro ao atualizar animal', error.message);
    }
  }

  async excluir(req, res) {
    try {
      const animal = await animalService.excluir(req.params.id);
      if (!animal) return errorResponse(res, 'Animal não encontrado', null, 404);
      return successResponse(res, { message: 'Animal removido com sucesso' });
    } catch (error) {
      return errorResponse(res, 'Erro ao excluir animal', error.message);
    }
  }
}

export const animalController = new AnimalController();
