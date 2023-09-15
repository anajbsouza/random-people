import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "people",
    password: "random",
    database: "random-people"
})

export { connection };