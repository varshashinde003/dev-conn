import express from 'express'
// eslint-disable-next-line no-unused-vars
import _JobPost from '../models/job-post'
import { getPostDetails, getAllPosts } from '../controllers/common/job-post-controller'
const router = express.Router()

router.get('/all-posts', getAllPosts)
router.get('/post-details/:slug', getPostDetails)

export default router
