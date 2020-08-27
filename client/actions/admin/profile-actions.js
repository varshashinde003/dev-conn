import { adminApi } from '../../../utils/api'
import apiErrorHandler from '../../../utils/api-error-handler'
// import { adminPrefix } from '../../../constants/route-prefix'
import { SET_AUTH_USER } from '../../reducers/admin/common-reducer'

export const getProfile = (history, shouldRedirect = false) => (dispatch) =>
  new Promise((resolve, reject) => {
    adminApi
      .get('profile')
      .then((response) => {
        dispatch({ type: SET_AUTH_USER, payload: { user: response.data.profile } })
        resolve()
      })
      .catch((e) => {
        apiErrorHandler(e, dispatch, history, shouldRedirect, true)
        reject(e)
      })
  })
