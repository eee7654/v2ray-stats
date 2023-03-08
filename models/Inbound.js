import { Model, raw } from 'objection'
import { db } from '../config/database'
import { toJalaliStr } from '../config/date_utils'

class Inbound extends Model {
    static get tableName() {
        return 'inbounds'
    }

    static get idColumn() {
        return 'id'
    }
}
Inbound.knex(db())
module.exports = Inbound
