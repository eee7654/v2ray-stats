import { Model } from 'objection'
import db from '../config/database'
class Admin extends Model {

    static get tableName() {
        return 'system_admins';
    }

    static get idColumn() {
        return ['id'];
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['full_name','username','passwrd','phone','email'],
            properties: {
                full_name: {type:'string'},
                phone: {type: 'string'},
                username: {type: 'string'},
                passwrd: {type: 'string'},
                email: {type: 'string'},
                last_login: {type: 'string'},
                created_at:{type: 'string'}
            }
        };
    }
 
}
Admin.knex(db())
module.exports = Admin