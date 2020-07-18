import express from 'express'
import { config } from 'dotenv'
import indexRoutes from '../routes/index-routes'
import adminRoutes from '../routes/admin-routes'
import employerRoutes from '../routes/employer-routes'
import candidateRoutes from '../routes/candidate-routes'
import publicRoutes from '../routes/public-routes'
import log from '../utils/logger'
import cookieParser from 'cookie-parser'

// Connect to database
import connectDB from '../config/db.config'
config()
const app = express()

connectDB()

app.set('view engine', 'ejs')
app.set('views', __dirname.replace('server', 'templates'))
app.use(express.static(__dirname.replace('server', 'public')))
app.use(express.json({ extended: true }))
app.use(cookieParser(process.env.APP_KEY))

app.use('/admin', adminRoutes)
app.use('/employer', employerRoutes)
app.use('/candidate', candidateRoutes)
app.use('/job', publicRoutes)
app.use('/', indexRoutes)

app.use((err, req, res, next) => {
  log.error(err.message)
  const result = {
    statusCode: 500,
    message: process.env.DEBUG === 'true' ? err.message : 'Something went wrong. Please try again later'
  }
  res.status(result.statusCode)
  return res.json(result)
})

const port = parseInt(process.env.PORT || 3000)
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
