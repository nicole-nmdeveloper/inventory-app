import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { DeleteLink } from './styled'

import Loading from '../Loading'

import axios from '../../services/axios'
import history from '../../services/history'

import * as actions from '../../store/modules/auth/actions'

export default function Delete() {
  const dispatch = useDispatch()

  const id = useSelector((state) => state.auth.user.id)

  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete(e) {
    e.preventDefault()

    try {
      setIsLoading(true)

      if (id) await axios.delete('/users')

      dispatch(actions.loginFailure())

      toast.success('A sua conta foi excluída.')

      setIsLoading(false)

      history.push('/register')
    } catch (err) {
      setIsLoading(false)

      const status = get(err, 'response.status', 0)

      if (status === 401) {
        toast.error('Você precisa fazer login.')
      } else {
        toast.error('Ocorreu um erro ao excluir a conta.')
      }
    }
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {id && (
        <DeleteLink to="/users" onClick={handleDelete}>
          Excluir conta
        </DeleteLink>
      )}
    </>
  )
}
