import express from 'express';

import multerConfig from './config/multer';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import CreatePointValidator from './validators/CreatePointValidator';

const routes = express.Router();
const upload = multerConfig;

// index, show, create, update, delete
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post(
  '/points',
  upload.single('image'),
  CreatePointValidator,
  pointsController.create
);

export default routes;
