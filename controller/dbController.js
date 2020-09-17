import { connect } from 'mongoose';
import config from 'config';

const uri = config.get('MongoURI');
const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };

export default async () => {
  try {
    await connect(uri, options);
    console.log(`Database is connected to the server 🚀 🚀`);
  } catch (error) {
    console.log('MongoConnection failed -> : ', error);
  }
};
