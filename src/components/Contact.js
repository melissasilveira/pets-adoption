import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@mui/material'
import { toast } from 'react-toastify'

import { contactSchema } from '../schemas/schemas'
import { contactForm } from '../services/contact'
import styled from '@emotion/styled'

function Contact(props) {
  useEffect(() => {
    if (props.petName) {
      setValue('message', `Oi, quero muito adotar o(a) ${props.petName}!`, {
        shouldValidate: true,
      })
    }
  }, [props.petName])

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const handleContact = async (data) => {
    try {
      await contactForm(data)
      toast.success('Mensagem enviada com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      reset()
    } catch (error) {
      toast.error('Ocorreu um problema ao enviar a mensagem.')
      console.log(error)
    }
  }

  return (
    <ContactBox id="contact">
      <Form onSubmit={handleSubmit(handleContact)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              margin="dense"
              variant="outlined"
              label="Nome Completo"
              color="primary"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              margin="dense"
              variant="outlined"
              label="E-mail"
              color="primary"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              margin="dense"
              variant="outlined"
              label="Telefone"
              color="primary"
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              id="outlined-multiline-flexible"
              margin="dense"
              multiline
              variant="outlined"
              label="Mensagem"
              color="primary"
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
              {...field}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          {'Enviar'}
        </Button>
      </Form>
    </ContactBox>
  )
}

const ContactBox = styled.div`
  background: #403423;
  display: flex;
  flex-direction: column;
  padding: 40px 15px;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  justify-content: flex-start;
  width: 330px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 25px;
  padding-top: 40px;
  gap: 10px;
`
const StyledTextField = styled(TextField)`
  background: #ffffff;
`
export default Contact
