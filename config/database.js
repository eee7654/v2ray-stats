'user strict';
//import { db_host } from './application'
import knex from 'knex'
var dbpool
export function db() {
    if (dbpool == undefined) {
        dbpool = knex({
            client: 'sqlite3', // or 'better-sqlite3'
            connection: {
                filename:'E:\\NodejsProjects\\v2ray-stats\\x-ui-english.db'
            },
            debug:process.env.NODE_ENV !== "production"
        })
    }
    return dbpool;
}

export default db