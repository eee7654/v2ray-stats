import { Model, raw } from 'objection'
import { db } from '../config/database'
import { toJalaliStr } from '../config/date_utils'

class Traffic extends Model {
    static get tableName() {
        return 'Traffic'
    }

    static get idColumn() {
        return 'user'
    }
}
Traffic.knex(db())
module.exports = Traffic
