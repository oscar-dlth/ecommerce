import db from "@infrastructure/db/mySql/sequelizer/models";
import app from "@presentation/webapi";

const PORT = process.env.PORT || 3000

//Mysql setup
db.sequelize.sync().then( ()=> {
  
  app.listen(PORT, () => {

    console.log(`Listening on PORT: ${PORT}`);

  })

});

