import { Model } from 'objection'
import db from '../config/database'
class City extends Model {

    static get tableName() {
        return 'cities'
    }

    static get idColumn() {
        return ['id']
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['state_id','name'],
            properties: {
                state_id: {type:'integer'},
                name: {type: 'string'},
                has_district:{type:'integer'},
                coordinates:{type:'string'}
            }
        };
    }
 
}
City.knex(db())
module.exports = City