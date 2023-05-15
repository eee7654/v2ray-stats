import { Model, raw } from 'objection'
import { db } from '../config/database'
import { toJalaliStr } from '../config/date_utils'

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get idColumn() {
        return 'id'
    }

    static get relationMappings() {
        const Traffic = require('./Traffic')
        return {
            traffics:{
                relation: Model.BelongsToOneRelation,
                modelClass: Traffic,
                join: {
                  from: 'users.username',
                  to: 'Traffic.user'
                }
            }
        }
    }
}
User.knex(db())
module.exports = User
