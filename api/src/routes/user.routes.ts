import express from 'express'
import { createUser, loginUser } from '../controllers/user.controller'
const router = express.Router();

router.post('/login', loginUser)
// disable creating new users
// router.post('/create', createUser)

export default router;