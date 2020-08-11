import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/dc-admin', (req, res) => {
  res.render('index')
})

router.get('/dc-admin/*', (req, res) => {
  res.render('index')
})

export default router
