import "dotenv/config";
import process from "process";

const config = {
    PORT: process.env.PORT,
    DATABASE: {
        HOST: process.env.DATABASE_HOST,
        USER: process.env.DATABASE_USER,
        PASSWORD: process.env.DATABASE_PASSWORD,
        PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME
    }
}

export default config;