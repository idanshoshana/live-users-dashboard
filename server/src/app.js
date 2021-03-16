import express from 'express';
import runLoaders from './loaders/index.js';

async function startServer() {
  const app = express();

  await runLoaders(app);

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

startServer();
