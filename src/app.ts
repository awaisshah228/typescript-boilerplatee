import express from 'express';
import 'express-async-errors';
import {NotFoundError} from './errors';
import {errorHandler} from './middlewares';
import routes from './routes';
// import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
// import helmet from 'helmet';


const app = express();
// const isDevelopment = process.env.Node === 'development'

//   app.use(
//     helmet({
//       crossOriginEmbedderPolicy: !isDevelopment,
//       contentSecurityPolicy: !isDevelopment,
//     })
//   )
// app.use(helmet());

// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', routes);


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });
// export default app;


app.all('*', async(req,res) => {
    // res.json({msg : "err"})
  throw new NotFoundError();

});

app.use(errorHandler);

export {app};
