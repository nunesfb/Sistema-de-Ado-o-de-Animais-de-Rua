import Joi from 'joi';

const adocaoSchema = Joi.object({
  adotante_id: Joi.string().required().messages({
    'string.base': '"adotante_id" deve ser um texto.',
    'string.empty': '"adotante_id" não pode ser vazio.',
    'any.required': '"adotante_id" é um campo obrigatório.'
  }),
  animal_id: Joi.string().required().messages({
    'string.base': '"animal_id" deve ser um texto.',
    'string.empty': '"animal_id" não pode ser vazio.',
    'any.required': '"animal_id" é um campo obrigatório.'
  }),
  data_adocao: Joi.date().messages({
    'date.base': '"data_adocao" deve ser uma data válida.'
  }),
});

export const validateAdocao = (data) => {
  const { error } = adocaoSchema.validate(data, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    throw new Error(errors.join(', '));
  }
};
