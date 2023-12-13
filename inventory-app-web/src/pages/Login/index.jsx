import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import {
  GlobalFormContainer,
  OpenForm,
  GlobalLink,
  Label,
  Input,
  Button,
} from '../../styles/GlobalStyles'

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

import history from '../../services/history'

export default function Login(props) {
  const dispatch = useDispatch()

  const prevPath = get(props, 'location.state.prevPath', '/products')

  const isLoading = useSelector((state) => state.auth.isLoading)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false

    if (!isEmail(email)) {
      formErrors = true
      toast.error('E-mail inválido.')
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true
      toast.error('Senha inválida.')
    }

    if (formErrors) return

    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  useEffect(() => {
    if (isLoggedIn) {
      return history.push('/products')
    }
  }, [isLoggedIn])

  return (
    <GlobalFormContainer>
      <Loading isLoading={isLoading} />

      <section>
        <h1>Faça login na plataforma e acesse sua dashboard</h1>
      </section>

      <OpenForm onSubmit={handleSubmit}>
        <Label htmlFor="email">
          E-mail
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </Label>
        <Label htmlFor="password">
          Senha
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </Label>

        <Button type="submit">Entrar</Button>

        <span>Ainda não tem uma conta?</span>
        <GlobalLink to="/register">Registre-se</GlobalLink>
      </OpenForm>
    </GlobalFormContainer>
  )
}
