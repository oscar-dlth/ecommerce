import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
// Set environment variables
let env = process.env.NODE_ENV;

if (env !== 'production') {

    mongoose.connect('mongodb://localhost:27017/stories'), {
      useMongoClient: true,
    };

} else {

  const username = process.env.MONGO_USER
  const password = process.env.MONGO_PASSWORD
  
  mongoose.connect('mongodb+srv://'+username+':'+ password +'@cluster0.k8r92.mongodb.net/stories?retryWrites=true&w=majority')
  
}

// Signal connection
mongoose.connection.once('open', ()=>{
}).on('error', (error) => {
}).on('disconnected', () => {
}) 

export default mongoose;