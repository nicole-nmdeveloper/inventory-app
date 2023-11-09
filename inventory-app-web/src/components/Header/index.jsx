import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Divider } from './styled'

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <span>Home</span>
      </Link>

      <Divider>|</Divider>

      <Link to="/register">
        <span>Sign up</span>
      </Link>
    </Nav>
  )
}
