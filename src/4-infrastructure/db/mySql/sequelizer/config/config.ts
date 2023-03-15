const dotenv = require('dotenv');
dotenv.config();

const config: any = {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
}

export default config;
