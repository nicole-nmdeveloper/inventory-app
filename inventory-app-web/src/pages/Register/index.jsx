import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { isEmail } from 'validator'
import { get } from 'lodash'

import { Container, Form } from './styled'

import axios from '../../services/axios'
import history from '../../services/history'

import Loading from '../../components/Loading'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false

    if (name.length < 3 || name.length > 255) {
      formErrors = true
      toast.error('O nome deve ter entre 3 e 255 caracteres.')
    }

    if (!isEmail(email)) {
      formErrors = true
      toast.error('E-mail inválido.')
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true
      toast.error('A senha deve ter entre 6 e 50 caracteres.')
    }

    if (formErrors) return

    setIsLoading(true)

    try {
      await axios.post('/users/', {
        name,
        email,
        password,
      })

      toast.success('Você fez seu cadastro!')

      setIsLoading(false)

      history.push('/login')
    } catch (err) {
      const errors = get(err, 'response.data.errors', [])

      errors.map((error) => toast.error(error))

      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
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
            placeholder="Crie uma senha"
          />
        </label>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  )
}
