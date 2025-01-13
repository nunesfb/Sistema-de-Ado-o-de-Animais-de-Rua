import Joi from 'joi';

const animalSchema = Joi.object({
  nome: Joi.string().max(100).required().messages({
    'string.base': '"nome" deve ser um texto.',
    'string.empty': '"nome" não pode ser vazio.',
    'string.max': '"nome" deve ter no máximo {#limit} caracteres.',
    'any.required': '"nome" é um campo obrigatório.'
  }),
  especie: Joi.string().valid('cachorro', 'gato').required().messages({
    'any.only': '"especie" deve ser "cachorro" ou "gato".',
    'any.required': '"especie" é um campo obrigatório.'
  }),
  raca: Joi.string().max(100).messages({
    'string.max': '"raca" deve ter no máximo {#limit} caracteres.'
  }),
  idade: Joi.number().min(0).required().messages({
    'number.base': '"idade" deve ser um número.',
    'number.min': '"idade" não pode ser negativa.',
    'any.required': '"idade" é um campo obrigatório.'
  }),
  sexo: Joi.string().valid('macho', 'fêmea').required().messages({
    'any.only': '"sexo" deve ser "macho" ou "fêmea".',
    'any.required': '"sexo" é um campo obrigatório.'
  }),
  descricao: Joi.string().max(500).messages({
    'string.max': '"descricao" deve ter no máximo {#limit} caracteres.'
  }),
  abrigo_id: Joi.string().required().messages({
    'string.empty': '"abrigo_id" não pode ser vazio.',
    'any.required': '"abrigo_id" é um campo obrigatório.'
  }),
});

export const validateAnimal = (data) => {
  const { error } = animalSchema.validate(data, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new Error(errors.join(', '));
  }
};
