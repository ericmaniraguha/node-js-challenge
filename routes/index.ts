import express, {Request, Response, Router} from 'express';
import { validateRequestSchema } from '../middleware/validate-request-schema';
import { registerSchema } from '../schama/register-schena';

const rootRouter = Router();
rootRouter.post(
    '/register',
    registerSchema,
    validateRequestSchema,
    (req: Request, res: Response) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
     
      res.sendStatus(201);
    },
  );
 

export {rootRouter as router}