import express from 'express'
import requireAuth from '../middleware/requireAuth'
import upload from '../middleware/multer'
import { createProject, disableProject, getProjects, updateProject, getAdminProjects } from '../controllers/project.controller'
const router = express.Router()

router.get('/', getProjects)
router.get('/admin', requireAuth, getAdminProjects)
router.post('/', requireAuth, upload.single('image'), createProject)
router.put('/', requireAuth, upload.single('image'), updateProject)
router.delete('/:id', requireAuth, disableProject)

export default router;