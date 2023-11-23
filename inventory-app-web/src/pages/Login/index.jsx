import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { Container, Form } from './styled'

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export default function Login(props) {
  const dispatch = useDispatch()

  const prevPath = get(props, 'location.state.prevPath', '/products')

  const isLoading = useSelector((state) => state.auth.isLoading)

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
      toast.error('Senha inválida')
    }

    if (formErrors) return

    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  )
}
