export const AuthActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const AuthActions = {
    login: (address) => (dispatch) => {
        dispatch({ type: AuthActionTypes.LOGIN, address });
    },
    logout: () => (dispatch) => {
        dispatch({ type: AuthActionTypes.LOGOUT });
    }
}