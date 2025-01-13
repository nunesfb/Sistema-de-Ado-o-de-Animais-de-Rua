import express from 'express';
import { abrigoController } from '../controllers/AbrigoController.js';

const router = express.Router();

router.get('/', abrigoController.listarTodos.bind(abrigoController));
router.get('/:id', abrigoController.obterPorId.bind(abrigoController));
router.post('/', abrigoController.criar.bind(abrigoController));
router.put('/:id', abrigoController.atualizar.bind(abrigoController));
router.delete('/:id', abrigoController.excluir.bind(abrigoController));

export default router;
