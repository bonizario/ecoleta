import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json([
    "Gabriel",
    "Daniel"
  ]);
});

export default app;
