import db from "./src/4-infrastructure/db/mySql/sequelizer/models";
import app from "./src/5-presentation/webapi";

const PORT = process.env.PORT || 3000

db.sequelize.sync().then( ()=> {
  
  app.listen(PORT, () => {

    console.log(`Listening on PORT: ${PORT}`);

  })

});