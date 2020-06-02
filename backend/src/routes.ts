import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
