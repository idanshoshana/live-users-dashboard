import dotenv from 'dotenv';
import expressLoader from './expressLoader.js';
import dbLoader from './dbLoader.js';

export default async (app) => {
  dotenv.config();
  await dbLoader();
  expressLoader(app);
};
