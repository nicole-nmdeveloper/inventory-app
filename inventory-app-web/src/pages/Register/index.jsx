import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { isEmail } from 'validator'
import { get } from 'lodash'
import { useSelector } from 'react-redux'

import {
  GlobalFormContainer,
  OpenForm,
  GlobalLink,
  Label,
  Input,
  Button,
} from '../../styles/GlobalStyles'

import axios from '../../services/axios'
import history from '../../services/history'

import Loading from '../../components/Loading'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

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

  useEffect(() => {
    if (isLoggedIn) {
      return history.push('/products')
    }
  }, [isLoggedIn])

  return (
    <GlobalFormContainer>
      <Loading isLoading={isLoading} />

      <section>
        <h1>
          Crie sua conta na plataforma e organize seu estoque de maneira eficaz
        </h1>
      </section>

      <OpenForm onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Nome
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </Label>
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
            placeholder="Crie uma senha"
          />
        </Label>

        <Button type="submit">Salvar</Button>

        <span>
          Já tem uma conta? Faça <GlobalLink to="/login">login</GlobalLink>
        </span>
      </OpenForm>
    </GlobalFormContainer>
  )
}
