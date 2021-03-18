const express = require('express');
const runLoaders = require('./loaders');

const app = express();

const startServer = new Promise((res, rej) => {
    runLoaders(app).then(() => {
      const port = process.env.PORT || 8080;
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
        res();
      });
    });
});

module.exports = { 
  startServer,
  app
}