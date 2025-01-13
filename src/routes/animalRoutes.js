import express from 'express';
import { animalController } from '../controllers/AnimalController.js';

const router = express.Router();

router.get('/', animalController.listarTodos.bind(animalController));
router.get('/:id', animalController.obterPorId.bind(animalController));
router.post('/', animalController.criar.bind(animalController));
router.put('/:id', animalController.atualizar.bind(animalController));
router.delete('/:id', animalController.excluir.bind(animalController));

export default router;
