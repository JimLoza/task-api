import { createPool } from 'mysql2/promise'
import config from '../envs'

export const pool = createPool({
    host: config.DATABASE.HOST ,
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    port: +config.DATABASE.PORT!,
    database: config.DATABASE.DATABASE_NAME,
})
