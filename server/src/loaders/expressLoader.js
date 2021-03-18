const express = require('express');
const cors = require('cors');
const getRoutes = require('../api/routes/index.js');

module.exports = (expressApp) => {
  expressApp.use(cors());

  expressApp.use(express.json());

  expressApp.use(express.urlencoded({ extended: true }));

  expressApp.use('/api', getRoutes());

  expressApp.use((err, req, res, next) => {
    res.status(err.code || err.status || 500).json({
      message: err.message,
    });
  });
};
