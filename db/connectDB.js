import mongoose from 'mongoose';

const connectDB = url => {
  mongoose.connect(url, {});

  console.log('DB connected');
};

export default connectDB;
