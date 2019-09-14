import { AuthActionTypes } from './actions';

const inititialState = {
  address: ''
}

export const AuthReducer = (state = inititialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        address: action.address
      }
    }
    case AuthActionTypes.LOGOUT: {
        return inititialState
    }
    default: return state;
  }
}