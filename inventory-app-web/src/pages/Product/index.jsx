import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { isInt, isFloat } from 'validator'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Pencil } from 'lucide-react'
import PropTypes from 'prop-types'

import { PrivateForm, Label, Input, Button } from '../../styles/GlobalStyles'
import { FormContainer, ProductPicture, IconContainer } from './styled'

import axios from '../../services/axios'
import history from '../../services/history'

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export default function Product({ match }) {
  const dispatch = useDispatch()

  const id = get(match, 'params.id', '')

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [variants, setVariants] = useState('')

  const [picture, setPicture] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    async function getData() {
      try {
        setIsLoading(true)

        const { data } = await axios.get(`/products/${id}`)
        const productPicture = get(data, 'Pictures[0].url', '')

        setPicture(productPicture)

        setTitle(data.title)
        setPrice(data.price)
        setAmount(data.amount)
        setVariants(data.variants)

        setIsLoading(false)
      } catch (err) {
        const status = get(err, 'response.status', 0)
        const errors = get(err, 'response.data.errors', [])

        if (status === 400) errors.map((error) => toast.error(error))

        setIsLoading(false)
        history.push('/products')
      }
    }

    getData()
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false

    if (title.length < 3 || title.length > 255) {
      formErrors = true
      toast.error('Título precisa ter entre 3 e 255 caracteres.')
    }

    if (!isFloat(String(price))) {
      formErrors = true
      toast.error('Preço inválido.')
    }

    if (!isInt(String(amount))) {
      formErrors = true
      toast.error('Quantidade inválida.')
    }

    if (variants.length < 3 || variants.length > 255) {
      formErrors = true
      toast.error('Variações precisam ter entre 3 e 255 caracteres.')
    }

    if (formErrors) return

    try {
      setIsLoading(true)

      if (id) {
        await axios.put(`/products/${id}`, {
          title,
          price,
          amount,
          variants,
        })

        toast.success('Produto editado com sucesso!')
      } else {
        await axios.post('/products/', {
          title,
          price,
          amount,
          variants,
        })

        toast.success('Produto registrado com sucesso!')
      }

      setIsLoading(false)
      history.push('/products')
    } catch (err) {
      const status = get(err, 'response.status', 0)
      const data = get(err, 'response.data', {})
      const errors = get(data, 'errors', [])

      if (errors.length > 0) {
        errors.map((error) => toast.error(error))
      } else {
        toast.error('Algo deu errado.')
      }

      if (status === 401) dispatch(actions.loginFailure())
    }
  }

  return (
    <FormContainer>
      <Loading isLoading={isLoading} />

      <PrivateForm onSubmit={handleSubmit}>
        <h1>{id ? 'Editar produto' : 'Novo produto'}</h1>

        {id && (
          <ProductPicture>
            {picture ? (
              <img crossOrigin="" src={picture} alt={title} />
            ) : (
              <IconContainer />
            )}

            <Link to={`/pictures/${id}`}>
              <Pencil size={20} />
            </Link>
          </ProductPicture>
        )}

        <Label htmlFor="title">
          Título
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do produto"
          />
        </Label>

        <Label htmlFor="price">
          Preço
          <Input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Preço do produto"
          />
        </Label>

        <Label htmlFor="amount">
          Quantidade
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Quantidade disponível"
          />
        </Label>

        <Label htmlFor="variants">
          Variações
          <Input
            type="text"
            value={variants}
            onChange={(e) => setVariants(e.target.value)}
            placeholder="Defina as variações do produto"
          />
        </Label>

        <Button type="submit">Salvar</Button>
      </PrivateForm>
    </FormContainer>
  )
}

Product.propTypes = {
  match: PropTypes.shape({}).isRequired,
}
