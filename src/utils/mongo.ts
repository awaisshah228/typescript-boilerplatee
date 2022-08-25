import mongoose from 'mongoose';


// Update below to match your own MongoDB connection string.
const MONGO_URL: string = process.env.MONGO_URL || '';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

/** */
export async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

/** */
export async function mongoDisconnect() {
  await mongoose.disconnect();
}
