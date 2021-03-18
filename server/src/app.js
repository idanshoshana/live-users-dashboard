const express = require('express');
const runLoaders = require('./loaders');

const app = express();

const startServer = new Promise((resolve, reject) => {
  runLoaders(app).then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      resolve();
    });
  });
});

module.exports = {
  startServer,
  app,
};
