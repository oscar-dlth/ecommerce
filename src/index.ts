import { initBrandiContainer } from "@dependency-inyection/initBrandiContainer";
import db from "@infrastructure/db/mySql/sequelizer/models";
import app from "@presentation/webapi";

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
  db.sequelize.sync().then(() => {
  })
});

