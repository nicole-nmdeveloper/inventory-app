import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { Image, Trash2Icon, PlusCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { GlobalLink } from '../../styles/GlobalStyles'
import {
  ProductsContainer,
  CardContainer,
  Card,
  MainPicture,
  Description,
  Actions,
  Divider,
  NewProduct,
  NoProductsTitle,
} from './styled'
import { dangerColor } from '../../config/colors'

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

    const trashIcon = e.currentTarget.nextSibling
    trashIcon.setAttribute('display', 'block')

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
    <ProductsContainer>
      <Loading isLoading={isLoading} />

      <h1>Produtos</h1>
      {products.length ? (
        <>
          <div className="container">
            <NewProduct to="/product/">
              Novo produto <PlusCircle size={26} />
            </NewProduct>
          </div>

          <Divider />

          <CardContainer>
            {products.map((product, index) => (
              <div key={String(product.id)}>
                <Card>
                  <MainPicture>
                    {get(product, 'Pictures[0].url', false) ? (
                      <img
                        crossOrigin=""
                        src={product.Pictures[0].url}
                        alt="Product"
                      />
                    ) : (
                      <Image size={48} strokeWidth={1} alt="Product" />
                    )}
                  </MainPicture>

                  <Description>
                    <span>
                      <b>Nome:</b> {product.title}
                    </span>
                    <span>
                      <b>Preço:</b> {product.price}
                    </span>
                    <span>
                      <b>Quantidade:</b> {product.amount}
                    </span>
                    <span>
                      <b>Variações:</b> {product.variants}
                    </span>

                    <Actions>
                      <GlobalLink to={`/product/${product.id}/edit`}>
                        <span>Editar</span>
                      </GlobalLink>

                      <span>|</span>

                      <GlobalLink
                        onClick={handleDeleteAsk}
                        to={`/product/${product.id}/delete`}
                      >
                        <span>Excluir</span>
                      </GlobalLink>

                      <Trash2Icon
                        size={16}
                        display="none"
                        cursor="pointer"
                        color={dangerColor}
                        onClick={(e) => handleDelete(e, product.id, index)}
                      />
                    </Actions>
                  </Description>
                </Card>

                <Divider />
              </div>
            ))}
          </CardContainer>
        </>
      ) : (
        <div className="container">
          <NoProductsTitle>Cadastre seu primeiro produto</NoProductsTitle>
          <NewProduct to="/product/">
            Novo produto <PlusCircle size={26} />
          </NewProduct>
        </div>
      )}
    </ProductsContainer>
  )
}
