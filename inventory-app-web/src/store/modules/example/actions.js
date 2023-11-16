import * as types from '../types'

export function btnClickRequest() {
  return {
    type: types.BTN_CLICKED_REQUEST,
  }
}

export function btnClickSuccess() {
  return {
    type: types.BTN_CLICKED_SUCCESS,
  }
}

export function btnClickFailure() {
  return {
    type: types.BTN_CLICKED_FAILURE,
  }
}
