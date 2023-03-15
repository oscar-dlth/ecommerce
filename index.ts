import mongoose from "./src/4-infrastructure/db/mongoDB/conection";
import db from "./src/4-infrastructure/db/mySql/sequelizer/models";
import app from "./src/5-presentation/webapi";



const PORT = process.env.PORT || 3000


/*
Mysql setup

db.sequelize.sync().then( ()=> {
  
  app.listen(PORT, () => {

    console.log(`Listening on PORT: ${PORT}`);

  })

});
/*

/*
 Mongo DB setup
*/
// Signal connection
mongoose.connection.once('open', ()=>{
  
  app.listen(PORT, () => {
    
    console.log(`Listening on PORT: ${PORT}`);
  
  })

}).on('error', (error) => {

}).on('disconnected', () => {

}) 
