import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/routes/user.routes'
import projectRoutes from './src/routes/project.routes'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/api/project', projectRoutes);
app.use('/api/user', userRoutes);
app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({ message: 'running' })
})

mongoose
  .connect(process.env.MONGO_URI!, { dbName: "portfolio" })
  .then(() => {
    app.listen(port, () => console.log("Server is listening on port " + port));
  })
  .catch(err => {
    console.log(err);
  });
