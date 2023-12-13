import React from 'react'

import { Page404Container, GoHome } from './styled'

export default function Page404() {
  return (
    <Page404Container>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <span>Este conteúdo não está disponível ou não existe</span>

      <GoHome to="/">Voltar para o início</GoHome>
    </Page404Container>
  )
}
