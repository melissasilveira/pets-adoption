import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
})

export const contactSchema = yup.object().shape({
  name: yup.string().required().min(6, 'Nome deve ter no mínimo 6 caracteres.'),
  email: yup.string().required().email('Digite um email válido.'),
  phone: yup.number().required(),
  message: yup
    .string()
    .required()
    .min(10, 'A mensagem deve ter no mínimo 10 caracteres.'),
})
