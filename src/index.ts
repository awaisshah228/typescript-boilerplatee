import mongoose from 'mongoose';
import 'dotenv/config';
import http from 'http';
import {app} from './app';


import {mongoConnect} from './utils/mongo';


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();


  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
// start();
