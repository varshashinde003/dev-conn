import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import rootReducer from '../reducers/admin'
import { adminPrefix } from '../../constants/route-prefix'

const instance = axios.create({ baseURL: `/api/${adminPrefix}` })

export default createStore(rootReducer, {}, applyMiddleware(thunk.withExtraArgument(instance)))
