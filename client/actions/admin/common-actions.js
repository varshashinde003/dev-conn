import { CLEAR_RESPONSE, REQUEST_FAILURE, REQUEST_SUCCESS, CANCEL_REQUEST } from '../../reducers/admin/common-reducer'

export const setErrorMessage = (error) => (dispatch) =>
  new Promise((resolve) => {
    dispatch({ type: REQUEST_FAILURE, payload: { error } })
    resolve()
  })

export const setSuccessMessage = (success) => (dispatch) =>
  new Promise((resolve) => {
    dispatch({ type: REQUEST_SUCCESS, payload: { success } })
    resolve()
  })

export const clearResponse = () => (dispatch) =>
  new Promise((resolve) => {
    dispatch({ type: CLEAR_RESPONSE })
    resolve()
  })

export const cancelResponse = () => (dispatch) =>
  new Promise((resolve) => {
    dispatch({ type: CANCEL_REQUEST })
    resolve()
  })
