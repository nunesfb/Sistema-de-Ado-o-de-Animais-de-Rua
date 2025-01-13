import express from 'express';
import { adocaoController } from '../controllers/AdocaoController.js';

const router = express.Router();

router.get('/', adocaoController.listarTodos.bind(adocaoController));
router.get('/:id', adocaoController.obterPorId.bind(adocaoController));
router.post('/', adocaoController.criar.bind(adocaoController));
router.put('/:id', adocaoController.atualizar.bind(adocaoController));
router.delete('/:id', adocaoController.excluir.bind(adocaoController));

export default router;
