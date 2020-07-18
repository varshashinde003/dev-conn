import express from 'express'
// eslint-disable-next-line no-unused-vars
import _Admin from '../models/admin'
// eslint-disable-next-line no-unused-vars
import _AdminPasswordReset from '../models/admin-password-reset'
import AuthMiddleware from '../middlewares/auth-middleware'
import AuthController from '../controllers/common/auth-controller'
import { createEmployer, getEmployerProfile, updateProfile, getAllEmployers, activateEmployer } from '../controllers/admin/employer-controller'
import { activateCandidate, getAllCandidates, getCandidateProfile } from '../controllers/admin/candidate-controller'
const router = express.Router()

const adminAuth = new AuthController('Admin')
const authMiddleware = new AuthMiddleware('Admin')

router.post('/web-login', adminAuth.webLogin)
router.post('/api-login', adminAuth.apiLogin)
router.post('/logout', adminAuth.logout)
router.post('/forget-password', adminAuth.sendForgetPasswordMail)
router.post('/reset-password', adminAuth.resetPassword)

router.use(authMiddleware.webAuth)
router.get('/profile', adminAuth.getProfile)
router.post('/change-password', adminAuth.changePassword)

// Employer routes
router.get('/all-employers', getAllEmployers)
router.post('/add-employer', createEmployer)
router.get('/employer-profile/:id', getEmployerProfile)
router.post('/update-employer/:id', updateProfile)
router.post('/activate-employer/:id', activateEmployer)

// Candidate routes
router.get('/all-candidates', getAllCandidates)
router.post('/activate-candidate/:id', activateCandidate)
router.get('/candidate-profile/:id', getCandidateProfile)

export default router
