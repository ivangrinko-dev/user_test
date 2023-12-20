import { Pool } from "pg"
const pool = new Pool(
    {
        password: 'ig123456789',
        user: 'postgres',
        port: 5432,
        database: 'users',
        host: 'localhost'
    }
)

export { pool }