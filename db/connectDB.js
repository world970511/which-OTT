import mongoose from 'mongoose';

const connectDB = url => {
  mongoose.connect(url, {});
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB');
  });
};

export default connectDB;
