import { Model } from 'objection'
import db from '../config/database'
import { db_driver } from '../config/application'
const adminTable = {
    sqlite:'users',
    mysql:'setting'
}
class Admin extends Model {

    static get tableName() {
        return adminTable[db_driver]
    }

    static get idColumn() {
        return ['id'];
    }
 
}
Admin.knex(db())
module.exports = Admin