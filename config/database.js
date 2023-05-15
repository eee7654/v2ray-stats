'user strict';
import { db_path,db_driver,db_host,db_port,db_user,db_name,db_pass } from './application'
import knex from 'knex'
var dbpool
console.log(db_pass)
let dbTypes = {
    mysql:()=>{
        return knex({
            client: 'mysql2',
            connection: {
              host : db_host,
              port : db_port,
              user : db_user,
              password : db_pass,
              database : db_name
            },
            pool: { min: 0, max: 8 },
            debug:process.env.NODE_ENV !== "production"
        })
    },
    sqlite:()=>{
        return knex({
            client: 'sqlite3',
            connection: {
                filename:db_path
            },
            debug:process.env.NODE_ENV !== "production"
        })
    }
}

export function db() {
    if (dbpool == undefined) {
        dbpool = dbTypes[db_driver]()
    }
    return dbpool;
}

export default db