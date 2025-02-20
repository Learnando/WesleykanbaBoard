import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';

const router = Router();

// /api/tickets url piece
router.use('/tickets', ticketRouter);

// /api/users url piece
router.use('/users', userRouter);

export default router;
