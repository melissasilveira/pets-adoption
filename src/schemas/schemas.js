import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
})

export const contactSchema = yup.object().shape({
  name: yup.string().required().min(6, 'Nome deve ter no mínimo 6 caracteres.'),
  email: yup.string().required().email('Digite um email válido.'),
  phone: yup.string().required('Campo obrigatório'),
  message: yup
    .string()
    .required()
    .min(10, 'A mensagem deve ter no mínimo 10 caracteres.'),
})

export const loginSchema = yup.object().shape({
  email: yup.string().required().email('Digite um email válido.'),
  password: yup.string().required('Campo obrigatório'),
})

export const registerSchema = yup.object().shape({
  name: yup.string().required().min(3, 'Nome deve ter no mínimo 3 caracteres.'),
  breed: yup.string().required('Campo obrigatório'),
  age: yup.string().required('Campo obrigatório'),
  url: yup.string().required('Campo obrigatório'),
})
