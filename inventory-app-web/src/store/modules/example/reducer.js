import * as types from '../types'

const initialState = {
  btnClicked: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BTN_CLICKED_REQUEST: {
      console.log('Doing the request...')
      return state
    }

    case types.BTN_CLICKED_SUCCESS: {
      console.log('Success!')
      const newState = { ...state }
      newState.btnClicked = !newState.btnClicked
      return newState
    }

    case types.BTN_CLICKED_FAILURE: {
      console.log('Something went wrong.')
      return state
    }

    default: {
      return state
    }
  }
}
