import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Container, Form, Gallery } from './styled'

import axios from '../../services/axios'
import history from '../../services/history'

import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export default function Pictures({ match }) {
  const dispatch = useDispatch()

  const id = get(match, 'params.id', '')

  const [picture, setPicture] = useState('')
  const [gallery, setGallery] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)

        const { data } = await axios.get(`/products/${id}`)

        setPicture(get(data, 'Pictures[0].url', ''))

        setGallery(get(data, 'Pictures', ''))

        setIsLoading(false)
      } catch (err) {
        toast.error('Erro ao obter imagem.')

        setIsLoading(false)

        history.push('/products')
      }
    }

    getData()
  }, [id])

  async function handleChange(e) {
    const file = e.target.files[0]

    const pictureURL = URL.createObjectURL(file)

    setPicture(pictureURL)

    const formData = new FormData()
    formData.append('product_id', id)
    formData.append('picture', file)

    try {
      setIsLoading(true)

      await axios.post('/pictures/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      toast.success('Foto salva com sucesso!')

      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)

      const { status } = get(err, 'response', '')

      toast.error('Erro ao enviar foto.')

      if (status === 401) dispatch(actions.loginFailure())
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Form>
        <h1>Fotos</h1>

        <label htmlFor="picture">
          {picture ? (
            <img crossOrigin="" src={picture} alt="Produto" />
          ) : (
            <span>Selecionar</span>
          )}

          <input type="file" id="picture" onChange={handleChange} />
        </label>

        <Gallery>
          {gallery.map((image, index) => (
            <div key={String(index)}>
              {!image.url ? (
                <span>Nada a exibir</span>
              ) : (
                <img crossOrigin="" src={image.url} alt="Product" />
              )}
            </div>
          ))}
        </Gallery>
      </Form>
    </Container>
  )
}

Pictures.propTypes = {
  match: PropTypes.shape({}).isRequired,
}
