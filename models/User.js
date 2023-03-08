import { Model } from 'objection'
import db from '../config/database'
import { toJalaliStr } from '../config/date_utils';

class User extends Model {

    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return ['usr_id'];
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['full_name','phone','national_id'],
            properties: {
                full_name: {type:'string'},
                phone: {type: 'string'},
                email: {type: 'string'},
                national_id: {type: 'string'},
                national_card: {type: 'string'}
            }
        }
    }

    $parseDatabaseJson(json) {
        json = super.$parseDatabaseJson(json);
        console.log(json)
        json.created_at = toJalaliStr(json.created_at)
        return json
    }
}
User.knex(db())
module.exports = User