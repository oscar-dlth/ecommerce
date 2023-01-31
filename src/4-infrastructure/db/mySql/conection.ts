import { Sequelize } from "sequelize";

const sequelize = new Sequelize('moviesdb', 'root', 'root', {
    dialect: 'mysql',
    dialectOptions: {
      // Your mysql2 options here
    }
  })

export default sequelize;