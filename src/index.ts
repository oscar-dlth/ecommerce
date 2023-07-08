import { initBrandiContainer } from "@dependency-inyection/initBrandiContainer";
import db from "@infrastructure/db/mySql/sequelizer/models";
import app from "@presentation/webapi";

const PORT = process.env.PORT || 3000

db.sequelize.sync().then( ()=> {
  app.listen(PORT, () => {
    initBrandiContainer();
    console.log(`Listening on PORT: ${PORT}`);
  })
});

