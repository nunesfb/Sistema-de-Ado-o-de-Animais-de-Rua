import express from 'express';
import { adotanteController } from '../controllers/AdotanteController.js';

const router = express.Router();

router.get('/', adotanteController.listarTodos.bind(adotanteController));
router.get('/:id', adotanteController.obterPorId.bind(adotanteController));
router.post('/', adotanteController.criar.bind(adotanteController));
router.put('/:id', adotanteController.atualizar.bind(adotanteController));
router.delete('/:id', adotanteController.excluir.bind(adotanteController));

export default router;
