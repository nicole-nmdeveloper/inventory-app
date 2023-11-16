import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-hot-toast'

import * as actions from './actions'
import * as types from '../types'

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      // reject()
    }, 2000)
  })

function* exampleRequest() {
  try {
    yield call(request)
    toast.success('Success!')
    yield put(actions.btnClickSuccess())
  } catch {
    toast.error('Something went wrong.')
    yield put(actions.btnClickFailure())
  }
}

export default all([takeLatest(types.BTN_CLICKED_REQUEST, exampleRequest)])
