import { Model } from 'objection'
import db from '../config/database'

class State extends Model {

    static get tableName() {
        return 'states';
    }

    static get idColumn() {
        return ['id'];
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['state_name',],
            properties: {
                state_name: {type: 'string'}
            }
        };
    }
 
}
State.knex(db())
module.exports = State