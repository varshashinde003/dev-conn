import { config } from 'dotenv'
import bcrypt from 'bcrypt'
import Admin from '../models/admin'

// Connect to database
import connectDB from '../config/db.config'
config()

connectDB()
const userData = {
  name: 'varsha',
  email: 'varshashinde003@gmail.com',
  password: bcrypt.hashSync('asdasdasd', 10)
}

Admin.create(userData).then(() => {
  console.log('Record inserted successfully!')
  process.exit()
}).catch(e => {
  console.log('There was some error while creating this record!', e)
  process.exit()
})
