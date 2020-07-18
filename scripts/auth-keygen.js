import editEnv from '../utils/edit-env'
import { getRandomString } from '../utils/random'

if (editEnv('AUTH_KEY', '"' + getRandomString(300) + '"')) {
  console.log('AUTH_KEY has been generated successfully.')
}
