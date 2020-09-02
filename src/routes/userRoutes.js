import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';
import validateToken from "../utils/tokenValidator";

const router = Router();

/**
 * GET /api/users.
 */
router.get('/', userController.fetchAll);

/**
 * GET /api/users/:id.
 */
router.get('/:id', userController.fetchById);

/**
 * POST /api/users.
 */
router.post('/',validateToken, userController.create);

/**
 * PUT /api/users/:id.
 */
router.put('/:id', validateToken, findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id.
 */
router.delete('/:id', validateToken ,findUser, userController.deleteUser);

export default router;
