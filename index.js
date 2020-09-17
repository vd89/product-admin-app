import Express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import morgan from 'morgan';
import cors from 'cors';
import dbController from './controller/dbController';
import { errorHandler, headerFunction, ignoreFavicon, notFound } from './middleware/index';
import router from './route';

const app = Express();
const server = createServer(app);

// Middleware
app.use(Express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(cors());

// Route 
app.use('/api',router)

// Error Handler and header 
app.use(headerFunction);
app.use(notFound);
app.use(errorHandler)

// Db connection
dbController();
//  Server setup
const port = process.env.PORT || 5000;
server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is running at http://localhost:${port}  🐕‍🦺 🐕‍🦺`);
});
