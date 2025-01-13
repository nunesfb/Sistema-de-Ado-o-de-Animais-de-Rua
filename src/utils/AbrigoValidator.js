import Joi from 'joi';

const abrigoSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required().messages({
    'string.base': '"nome" deve ser um texto.',
    'string.empty': '"nome" não pode ser vazio.',
    'string.min': '"nome" deve ter no mínimo {#limit} caracteres.',
    'string.max': '"nome" deve ter no máximo {#limit} caracteres.',
    'any.required': '"nome" é um campo obrigatório.'
  }),
  endereco: Joi.string().min(10).max(200).required().messages({
    'string.base': '"endereco" deve ser um texto.',
    'string.empty': '"endereco" não pode ser vazio.',
    'string.min': '"endereco" deve ter no mínimo {#limit} caracteres.',
    'string.max': '"endereco" deve ter no máximo {#limit} caracteres.',
    'any.required': '"endereco" é um campo obrigatório.'
  }),
  telefone: Joi.string()
    .pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)
    .required()
    .messages({
      'string.pattern.base': '"telefone" deve estar no formato (xx) xxxxx-xxxx.',
      'string.empty': '"telefone" não pode ser vazio.',
      'any.required': '"telefone" é um campo obrigatório.'
    }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" deve ser um endereço de e-mail válido.',
    'string.empty': '"email" não pode ser vazio.',
    'any.required': '"email" é um campo obrigatório.'
  })
});

export const validateAbrigo = (data) => {
  const { error } = abrigoSchema.validate(data, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new Error(errors.join(', '));
  }
};
