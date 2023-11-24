import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Nav, Divider } from './styled'

import * as actions from '../../store/modules/auth/actions'

import history from '../../services/history'

export default function Header() {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const userName = useSelector((state) => state.auth.user.name)

  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(actions.loginFailure())

    history.push('/login')
  }

  return (
    <Nav>
      <Link to="/">
        <span>Home</span>
      </Link>

      {isLoggedIn ? (
        <>
          <Divider>|</Divider>

          <Link onClick={handleLogout} to="/logout">
            <span>Sign out</span>
          </Link>

          <Divider>|</Divider>

          <span>Welcome, {userName}</span>
        </>
      ) : (
        <>
          <Divider>|</Divider>

          <Link to="/register">
            <span>Sign up</span>
          </Link>

          <Divider>|</Divider>

          <Link to="/login">
            <span>Sign in</span>
          </Link>
        </>
      )}
    </Nav>
  )
}
