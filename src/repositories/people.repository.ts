import { connection } from '../database/database'
import { People } from 'protocols/peopleProtocol'



export async function randomPersonRepository() {
    const randomPerson = await connection.query<People>(
        `SELECT * FROM people ORDER BY RANDOM() LIMIT 1`
    )
    const { rows, rowCount } = randomPerson;
    return { rows, rowCount}
}