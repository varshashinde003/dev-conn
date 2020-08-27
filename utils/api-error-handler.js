import { setErrorMessage, cancelResponse } from '../client/actions/admin/common-actions'
import { adminPrefix } from '../constants/route-prefix'
import { CLEAR_AUTH_USER } from '../client/reducers/admin/common-reducer'

export default (e, dispatch, history, shouldRedirectToLogin = false, shouldDisplayError = false) => {
  dispatch(cancelResponse())
  if (e.response) {
    if (e.response.status === 401) {
      dispatch({ type: CLEAR_AUTH_USER })
      if (shouldRedirectToLogin) {
        dispatch(setErrorMessage(''))
        history.push(`/${adminPrefix}/login?redirect_to=${history.location.pathname}`)
      }
    } else if (e.response.status === 403) {
      history.push(`/${adminPrefix}/account-blocked`)
    } else {
      let errorMessage = ''
      if (e.response.data.errors) {
        errorMessage = e.response.data.errors[0]
      } else if (e.response.data.error) {
        errorMessage = e.response.data.error
      } else if (e.response.data.message) {
        errorMessage = e.response.data.message
      } else {
        errorMessage = JSON.stringify(e.response.data)
      }

      if (shouldDisplayError) {
        dispatch(setErrorMessage(errorMessage))
      } else {
        dispatch(setErrorMessage(''))
      }
    }
  } else {
    console.error(e.message)
    dispatch(setErrorMessage('Whoops! Something went wrong...'))
  }
}
