import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@mui/material'

import { contactSchema } from '../schemas/auth'

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const handleContact = () => {
    console.log(handleContact)
  }

  return (
    <React.Fragment>
      <div>
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
    </React.Fragment>
  )
}

export default Contact
