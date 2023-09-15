import { Router } from 'express';

const peopleRouter = Router();

peopleRouter.get('/person', console.log('oi'));

export default peopleRouter;