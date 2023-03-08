'user strict';
import { db_path } from './application'
import knex from 'knex'
var dbpool

export function db() {
    if (dbpool == undefined) {
        dbpool = knex({
            client: 'sqlite3',
            connection: {
                filename:db_path
            },
            debug:process.env.NODE_ENV !== "production"
        })
    }
    return dbpool;
}

export default db