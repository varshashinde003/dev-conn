const initialState = {
  user: null,
  loading: false,
  error: null,
  success: null
}

export const SET_AUTH_USER = 'SET_USER_AUTH'
export const CLEAR_AUTH_USER = 'GET_AUTH_USER'
export const REQUEST_BEGIN = 'REQUEST_BEGIN'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAILURE = 'REQUEST_FAILURE'
export const CANCEL_REQUEST = 'CANCEL_REQUEST'
export const CLEAR_RESPONSE = 'CLEAR_RESPONSE'

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case CLEAR_AUTH_USER:
      return {
        ...state,
        user: null
      }
    case REQUEST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        success: null
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload.success
      }
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: null
      }
    case CLEAR_RESPONSE:
      return {
        ...state,
        loading: false,
        error: null,
        success: null
      }
    case CANCEL_REQUEST:
      return {
        ...state,
        loading: false
      }
    default:
      return {
        ...state
      }
  }
}

export default CommonReducer
