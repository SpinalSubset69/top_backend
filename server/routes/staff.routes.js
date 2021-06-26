import express from 'express';
import staffController from '../controller/staff.controller';

const router = express.Router();

router.route('/staff')
    .put(staffController.create)
    .get(staffController.verifyAccess)
    .post(staffController.signIn);

export default router;