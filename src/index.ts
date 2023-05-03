import db from "./app/4-infrastructure/db/mySql/sequelizer/models";
import app from "./app/5-presentation/webapi";

const PORT = process.env.PORT || 3000

//Mysql setup
db.sequelize.sync().then( ()=> {
  
  app.listen(PORT, () => {

    console.log(`Listening on PORT: ${PORT}`);

  })

});

