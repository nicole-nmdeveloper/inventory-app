import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-hot-toast'
import { get } from 'lodash'

import * as actions from './actions'
import * as types from '../types'

import axios from '../../../services/axios'
import history from '../../../services/history'

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/', payload)

    yield put(actions.loginSuccess({ ...response.data }))

    toast.success('Você fez login!')

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`

    return history.push(payload.prevPath)
  } catch (err) {
    toast.error('Usuário ou senha inválidos.')

    return yield put(actions.loginFailure())
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token')
  if (!token) return

  axios.defaults.headers.Authorization = `Bearer ${token}`
}

function* editRequest({ payload }) {
  const { id, name, email } = payload

  try {
    if (!id) return

    yield call(axios.put, '/users/', {
      name,
      email,
    })

    toast.success('Perfil editado com sucesso!')

    yield put(actions.editSuccess({ name, email }))
  } catch (err) {
    const errors = get(err, 'response.data.errors', [])
    const status = get(err, 'response.status', 0)

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.')
      yield put(actions.loginFailure())
      return history.push('/login')
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error))
    } else {
      toast.error('Algo deu errado!')
    }

    return yield put(actions.editFailure())
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.EDIT_REQUEST, editRequest),
])
