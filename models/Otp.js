import { Model } from 'objection'
import db from '../config/database'

class Otp extends Model {

    static get tableName() {
        return 'otp_history'
    }

    static get idColumn() {
        return ['id']
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['phone','code','referer','created_at','expired_at'],
            properties: {
                phone: {type: 'string'},
                code: {type: 'string'},
                is_used: {type: 'integer'},
                referer: {type: 'string'},
                created_at: {type: 'string'},
                expired_at: {type: 'string'}
            }
        };
    }
 
}
Otp.knex(db())
module.exports = Otp