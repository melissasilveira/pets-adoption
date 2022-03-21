import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@mui/material'

import { loginSchema } from '../schemas/auth'

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const handleLogin = () => {
    console.log(handleLogin)
  }
  return (
    <div id="login">
      <img src="/images/brand-logo (1).png" alt="logo" />
      <form onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              variant="outlined"
              s
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              type="password"
              margin="dense"
              variant="outlined"
              label="Senha"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
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
          ENTRAR
        </Button>
      </form>
    </div>
  )
}

export default Login
