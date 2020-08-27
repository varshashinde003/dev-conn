import axios from 'axios'
import { adminPrefix } from '../constants/route-prefix'

export const adminApi = axios.create({ baseURL: `/api/${adminPrefix}/` })
