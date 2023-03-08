import { Model, raw } from 'objection'
import { db } from '../config/database'
import { toJalaliStr } from '../config/date_utils'

class ClientTraffic extends Model {
    static get tableName() {
        return 'client_traffics'
    }

    static get idColumn() {
        return 'id'
    }
}
ClientTraffic.knex(db())
module.exports = ClientTraffic
