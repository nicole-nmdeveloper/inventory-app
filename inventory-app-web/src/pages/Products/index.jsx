import React, { useState } from 'react'

import { Container } from '../../styles/GlobalStyles'

import Loading from '../../components/Loading'

export default function Products() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Products</h1>
    </Container>
  )
}
