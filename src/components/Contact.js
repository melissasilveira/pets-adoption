import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@mui/material'
import { toast } from 'react-toastify'

import { contactSchema } from '../schemas/auth'
import { contactForm } from '../services/pets'

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
    <div id="contact">
      <form onSubmit={handleSubmit(handleContact)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              variant="outlined"
              label="Nome Completo"
              color="secondary"
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
            <TextField
              margin="dense"
              variant="outlined"
              label="E-mail"
              color="secondary"
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
            <TextField
              margin="dense"
              variant="outlined"
              label="Telefone"
              color="secondary"
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
            <TextField
              id="outlined-multiline-flexible"
              margin="dense"
              multiline
              variant="outlined"
              label="Mensagem"
              color="secondary"
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
              {...field}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          style={{ marginTop: '10px' }}
        >
          {'Enviar'}
        </Button>
      </form>
    </div>
  )
}

export default Contact
