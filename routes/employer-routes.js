import express from 'express'
// eslint-disable-next-line no-unused-vars
import _Employer from '../models/employer'
// eslint-disable-next-line no-unused-vars
import _EmployerPasswordReset from '../models/employer-password-reset'
// eslint-disable-next-line no-unused-vars
import _EmailVerification from '../models/email-verification'
import AuthMiddleware from '../middlewares/auth-middleware'
// eslint-disable-next-line no-unused-vars
import activeAccountMiddleware from '../middlewares/active-account-middleware'
import AuthController from '../controllers/common/auth-controller'
import { createEmployer, getProfile, updateProfile } from '../controllers/common/employer-controller'
import VerificationController from '../controllers/common/verification-controller'
import { addPost, editPost, deletePost, activateJobPost } from '../controllers/employer/job-post-controller'
const router = express.Router()

const employerAuth = new AuthController('Employer')
const authMiddleware = new AuthMiddleware('Employer')
const emailVerification = new VerificationController('Employer')

router.post('/signup', createEmployer)
router.post('/api-login', employerAuth.apiLogin)
router.post('/forget-password', employerAuth.sendForgetPasswordMail)
router.post('/reset-password', employerAuth.resetPassword)
router.get('/verify-email/:token', emailVerification.verifyEmail)

router.use(authMiddleware.apiAuth)
router.get('/profile', getProfile)
router.post('/update-profile', updateProfile)
router.post('/logout', employerAuth.logout)
router.post('/change-password', employerAuth.changePassword)

// Job Post Routes
router.post('/add-post', addPost)
router.post('/edit-post/:slug', editPost)
router.delete('/delete-post/:id', deletePost)
router.post('/activate-job-post/:id', activateJobPost)

// router.use(activeAccountMiddleware('Employer'))

export default router
