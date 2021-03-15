import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getRoutes from './routes/index.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', getRoutes());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
