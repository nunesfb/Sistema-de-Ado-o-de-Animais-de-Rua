import Joi from 'joi';

const adotanteSchema = Joi.object({
  nome: Joi.string().max(100).required().messages({
    'string.base': '"nome" deve ser um texto.',
    'string.empty': '"nome" não pode ser vazio.',
    'string.max': '"nome" deve ter no máximo {#limit} caracteres.',
    'any.required': '"nome" é um campo obrigatório.'
  }),
  email: Joi.string().email().max(100).required().messages({
    'string.email': '"email" deve ser um endereço de e-mail válido.',
    'string.empty': '"email" não pode ser vazio.',
    'string.max': '"email" deve ter no máximo {#limit} caracteres.',
    'any.required': '"email" é um campo obrigatório.'
  }),
  telefone: Joi.string().pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/).required().messages({
    'string.pattern.base': '"telefone" deve estar no formato (xx) xxxxx-xxxx.',
    'string.empty': '"telefone" não pode ser vazio.',
    'any.required': '"telefone" é um campo obrigatório.'
  }),
  endereco: Joi.string().max(200).required().messages({
    'string.base': '"endereco" deve ser um texto.',
    'string.empty': '"endereco" não pode ser vazio.',
    'string.max': '"endereco" deve ter no máximo {#limit} caracteres.',
    'any.required': '"endereco" é um campo obrigatório.'
  }),
});

export const validateAdotante = (data) => {
  const { error } = adotanteSchema.validate(data, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new Error(errors.join(', '));
  }
};
