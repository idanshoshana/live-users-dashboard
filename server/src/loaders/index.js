import dotenv from 'dotenv';
import expressLoader from './expressLoader.js';

export default (app) => {
  dotenv.config();
  expressLoader(app);
};
