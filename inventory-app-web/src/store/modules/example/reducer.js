const initialState = {
  btnClicked: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'BTN_CLICKED': {
      const newState = { ...state }
      newState.btnClicked = !newState.btnClicked
      return newState
    }

    default: {
      return state
    }
  }
}
