import express, { json } from 'express';
import cors from 'cors';
import getRoutes from '../api/routes/index.js';

export default (expressApp) => {
  expressApp.use(cors());

  expressApp.use(json());

  expressApp.use(express.urlencoded({ extended: true }));

  expressApp.use('/api', getRoutes());

  expressApp.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
    });
  });
};
