import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { Image, Pencil, Trash2Icon } from 'lucide-react'
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

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Produtos</h1>

      <Table>
        {products.map((product) => (
          <div key={String(product.id)}>
            <ProfilePicture>
              {get(product, 'Pictures[0].url', false) ? (
                <img
                  crossOrigin=""
                  src={product.Pictures[0].url}
                  alt="Profile"
                />
              ) : (
                <Image size={48} strokeWidth={1} />
              )}
            </ProfilePicture>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <span>{product.amount}</span>
            <span>{product.variants}</span>

            <Link to={`/product/${product.id}/edit`}>
              <Pencil size={16} />
            </Link>
            <Link to={`/product/${product.id}/delete`}>
              <Trash2Icon size={16} />
            </Link>
          </div>
        ))}
      </Table>
    </Container>
  )
}
