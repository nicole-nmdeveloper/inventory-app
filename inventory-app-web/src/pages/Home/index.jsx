import React, { useEffect } from 'react'
import { CopyPlus, List, ImagePlus, ArrowUpRight } from 'lucide-react'
import { useSelector } from 'react-redux'

import { HomeContainer, MainTitle, IconContainer, GetStarted } from './styled'

import history from '../../services/history'

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      return history.push('/products')
    }
  }, [isLoggedIn])

  return (
    <HomeContainer>
      <MainTitle>
        <h1>Gerencie o estoque da sua loja.</h1>
        <GetStarted to="/register">
          <span>Começar</span>
          <ArrowUpRight />
        </GetStarted>
      </MainTitle>

      <section>
        <div>
          <IconContainer>
            <CopyPlus />
          </IconContainer>
          <span>Cadastro</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            assumenda, commodi quo, saepe adipisci soluta harum impedit dolorem
            obcaecati a nihil at, quisquam natus officiis inventore aspernatur
            aperiam molestiae voluptatibus!
          </p>
        </div>
        <div>
          <IconContainer>
            <List />
          </IconContainer>
          <span>Lista</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            accusamus aspernatur. Quas accusamus pariatur mollitia iure
            veritatis nobis reprehenderit recusandae deleniti quod cum eveniet
            possimus alias, beatae illum assumenda fuga?
          </p>
        </div>
        <div>
          <IconContainer>
            <ImagePlus />
          </IconContainer>
          <span>Fotos</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            debitis incidunt maxime dicta sit doloribus tempora officiis iste
            qui quis, quod tempore laudantium ipsam quasi enim odio vel
            repudiandae earum?
          </p>
        </div>
      </section>
    </HomeContainer>
  )
}
