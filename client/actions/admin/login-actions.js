/* eslint-disable no-unused-vars */
import { adminApi } from '../../../utils/api'
import apiErrorHandler from '../../../utils/api-error-handler'
import { SET_AUTH_USER, CLEAR_AUTH_USER, REQUEST_BEGIN, REQUEST_SUCCESS } from '../../reducers/admin/common-reducer'
import { adminPrefix } from '../../../constants/route-prefix'

export const login = (data, cb, history) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch({ type: REQUEST_BEGIN })
    adminApi
      .post('web-login', data)
      .then((response) => {
        dispatch({ type: SET_AUTH_USER, payload: { user: response.data.profile } })
        dispatch({ type: REQUEST_SUCCESS, payload: { success: 'Logged in successfully!' } })
        if (typeof cb === 'function') {
          cb()
        }
        resolve()
      })
      .catch((e) => {
        apiErrorHandler(e, dispatch, history, false, true)
        reject(e)
      })
  })

export const logout = (history) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch({ type: CLEAR_AUTH_USER })
    dispatch({ type: REQUEST_BEGIN })
    adminApi
      .post('logout')
      .then(() => {
        dispatch({ type: REQUEST_SUCCESS, payload: { success: '' } })
        history.push(`/${adminPrefix}/login`)
        resolve()
      })
      .catch((e) => {
        apiErrorHandler(e, dispatch, history, false, true)
        reject(e)
      })
  })
