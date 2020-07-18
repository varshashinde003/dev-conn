import mongoose from 'mongoose'

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)
mongoose.Promise = global.Promise

const connectDB = () => {
  mongoose.connect(process.env.DB_URL, { user: process.env.DB_USER, pass: process.env.DB_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
      console.error('There is a problem connecting with database. Please check the following error: ', err.message)
    })
}

export default connectDB
