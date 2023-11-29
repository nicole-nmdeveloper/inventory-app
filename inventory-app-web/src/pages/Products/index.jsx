import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { Image, Pencil, Trash2Icon, AlertCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Container } from '../../styles/GlobalStyles'
import { Table, ProfilePicture } from './styled'

import axios from '../../services/axios'

import Loading from '../../components/Loading'

export default function Products() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      setIsLoading(true)

      try {
        const response = await axios.get('/products/')
        setProducts(response.data)
      } catch (err) {
        toast.error('Ops! Algo deu errado. Tente novamente mais tarde.')
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  function handleDeleteAsk(e) {
    e.preventDefault()

    const exclamation = e.currentTarget.nextSibling
    exclamation.setAttribute('display', 'block')

    e.currentTarget.remove()
  }

  async function handleDelete(e, id, index) {
    e.persist()

    try {
      setIsLoading(true)

      await axios.delete(`/products/${id}`)

      const newProducts = [...products]
      newProducts.splice(index, 1)
      setProducts(newProducts)

      toast.success('Produto excluído.')

      setIsLoading(false)
    } catch (err) {
      const status = get(err, 'response.status', 0)

      if (status === 401) {
        toast.error('Você precisa fazer login.')
      } else {
        toast.error('Ocorreu um erro ao excluir aluno.')
      }

      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Produtos</h1>

      <Table>
        {products.map((product, index) => (
          <div key={String(product.id)}>
            <ProfilePicture>
              {get(product, 'Pictures[0].url', false) ? (
                <img
                  crossOrigin=""
                  src={product.Pictures[0].url}
                  alt="Product"
                />
              ) : (
                <Image size={48} strokeWidth={1} alt="Product" />
              )}
            </ProfilePicture>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <span>{product.amount}</span>
            <span>{product.variants}</span>

            <Link to={`/product/${product.id}/edit`}>
              <Pencil size={16} />
            </Link>

            <Link
              onClick={handleDeleteAsk}
              to={`/product/${product.id}/delete`}
            >
              <Trash2Icon size={16} />
            </Link>

            <AlertCircle
              size={16}
              display="none"
              cursor="pointer"
              color="#B22222"
              onClick={(e) => handleDelete(e, product.id, index)}
            />
          </div>
        ))}
      </Table>
    </Container>
  )
}
