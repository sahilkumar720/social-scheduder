import express from 'express';
import { protect } from '../middlewares/authMiddlewares.js';
import { addAccount, disconnectAccount, getAccounts } from '../controllers/accountControllers.js';


const accountRouter = express.Router();

accountRouter.get('/', protect, getAccounts);
accountRouter.post('/', protect, addAccount);
accountRouter.get('/:id', protect, disconnectAccount);


export default accountRouter;