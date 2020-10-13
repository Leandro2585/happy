import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'tmp')));
app.use(errorHandler);
export default app;