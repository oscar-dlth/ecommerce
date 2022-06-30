import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
// Set environment variables
let env = process.env.NODE_ENV;

if (env === 'production') {
  const username = process.env.MONGO_USER
  const password = process.env.MONGO_PASSWORD
  mongoose.connect('mongodb+srv://'+username+':'+ password +'@cluster0.fl0cv.mongodb.net/stories?retryWrites=true&w=majority')
} else {
  mongoose.connect('mongodb://localhost:27017/clean_node'), {
    useMongoClient: true,
  };
}

// Signal connection
mongoose.connection.once('open', ()=>{
  console.log('Connection has been made');
}).on('error', (error) => {
  console.log('Connect error', error);
}).on('disconnected', () => {
  console.log('Connection disconnected');
})

export default mongoose;