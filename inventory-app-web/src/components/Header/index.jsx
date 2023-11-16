import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Nav, Divider } from './styled'

export default function Header() {
  const btnClicked = useSelector((state) => state.example.btnClicked)

  return (
    <Nav>
      <Link to="/">
        <span>Home</span>
      </Link>

      <Divider>|</Divider>

      <Link to="/register">
        <span>Sign up</span>
      </Link>

      <Divider>|</Divider>

      <span>{btnClicked ? 'Clicked' : 'Uncliked'}</span>
    </Nav>
  )
}
