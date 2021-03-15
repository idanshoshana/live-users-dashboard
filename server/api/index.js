import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
