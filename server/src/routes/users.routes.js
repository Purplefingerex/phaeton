import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/check', authController.check);
export default router;
