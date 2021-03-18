const dotenv = require('dotenv');
const expressLoader = require('./expressLoader');
const dbLoader = require('./dbLoader');

module.exports = async (app) => {
  dotenv.config();
  await dbLoader();
  expressLoader(app);
};
