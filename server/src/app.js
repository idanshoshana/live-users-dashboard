const express = require('express');
const runLoaders = require('./loaders');

async function startServer() {
  const app = express();

  await runLoaders(app);

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  return app;
}

module.exports = startServer();
