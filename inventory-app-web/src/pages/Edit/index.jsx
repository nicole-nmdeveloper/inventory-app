import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container, Form } from './styled'

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'
import Delete from '../../components/Delete'

export default function Edit() {
  const dispatch = useDispatch()

  const id = useSelector((state) => state.auth.user.id)
  const nameStored = useSelector((state) => state.auth.user.name)
  const emailStored = useSelector((state) => state.auth.user.email)
  const isLoading = useSelector((state) => state.auth.isLoading)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!id) return

    setName(nameStored)
    setEmail(emailStored)
  }, [id, nameStored, emailStored])

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

    if (formErrors) return

    dispatch(actions.editRequest({ id, name, email }))
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Form onSubmit={handleSubmit}>
        <h1>Edite seu perfil</h1>
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

        <button type="submit">Salvar alterações</button>

        <Link to="#">
          <span>Alterar senha</span>
        </Link>

        {isLoggedIn && <Delete />}
      </Form>
    </Container>
  )
}
