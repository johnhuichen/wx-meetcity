const defaultState = {
  userInfo: null
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return { ...state, userInfo: action.userInfo }
    default:
      return state
  }
}

export default user
