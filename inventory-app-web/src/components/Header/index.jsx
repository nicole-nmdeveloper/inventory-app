import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Store, User2, List, LogOut } from 'lucide-react'

import { NavContainer, Nav, DashboardNav } from './styled'

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
    <NavContainer>
      {isLoggedIn ? (
        <DashboardNav>
          <Link to="/products">
            <span className="greetings">Olá, {userName}!</span>
          </Link>

          <div>
            <Link to="/products">
              <List />
              <span className="iconLabel">Produtos</span>
            </Link>

            <Link to="/edit">
              <User2 />
              <span className="iconLabel">Perfil</span>
            </Link>

            <Link onClick={handleLogout} to="/logout">
              <LogOut />
              <span className="iconLabel">Sair</span>
            </Link>
          </div>
        </DashboardNav>
      ) : (
        <Nav>
          <Link to="/">
            <Store />
            <span>Inventory App</span>
          </Link>

          <div>
            <Link to="/">
              <span>Início</span>
            </Link>

            <Link to="/register">
              <span>Criar conta</span>
            </Link>

            <Link to="/login">
              <span>Entrar</span>
            </Link>
          </div>
        </Nav>
      )}
    </NavContainer>
  )
}
