import React from 'react'
import { useDispatch } from 'react-redux'

import * as exampleActions from '../../store/modules/example/actions'
import { Container } from './styled'

export default function Login() {
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()

    dispatch(exampleActions.btnClickRequest())
  }

  return (
    <Container>
      <h1>Login</h1>
      <br />
      <p>Login with your account</p>
      <br />
      <button type="button" onClick={handleClick}>
        Test
      </button>
    </Container>
  )
}
