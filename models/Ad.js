import { Model, raw } from 'objection'
import { db } from '../config/database'
import { toJalaliStr } from '../config/date_utils'

class Ad extends Model {
    static get tableName() {
        return 'system_ads'
    }

    static get idColumn() {
        return 'ad_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'title',
                'category_id'
            ],
            properties: {
                title: { type: 'string' },
                category_id: { type: 'integer' },
                table_id: { type: 'integer' },
                state_id: { type: 'integer' },
                city_id: { type: 'integer' },
                district_id: { type: 'integer' },
                total_price: { type: 'integer' },
            },
        };
    }

    static modifiers = {
        convertStateCity(qb) {
            qb.select(
                raw('GetCategory(system_ads.category_id) AS category_name'),
                raw('GetState(system_ads.state_id) AS state_name'),
                raw('GetCity(system_ads.city_id) AS city_name'),
                raw('GetDistrict(system_ads.district_id) AS district_name')
            );
        },
    };

    $parseDatabaseJson(json) {
        json = super.$parseDatabaseJson(json);
        json.created_at = toJalaliStr(json.created_at);
        if (json.released_at != null) {
            json.released_at = toJalaliStr(json.released_at);
        }
        if (json.updated_at != null) {
            json.updated_at = toJalaliStr(json.updated_at);
        }
        switch (json.status) {
            case 0:
                json.status_name = '';
                break;
            case 1:
                json.status_name = 'در انتظار تایید';
                break;
            case 2:
                json.status_name = 'تایید شده';
                break;
            case 3:
                json.status_name = 'مسدود شده';
                break;
            case 4:
                json.status_name = 'حذف شده';
                break;
            case 5:
                json.status_name = 'رفع نواقص';
                break;
        }

        return json;
    }

    static get relationMappings() {
        const State = require('./State')
        const City = require('./City')
        const District = require('./District')
        const SalesType = require('./SalesType')
        const Category = require('./Category')
        const Agency = require('./Agency')
        const Advisor = require('./Advisor')
        const User = require('./User')
        const AdFeature = require('./AdFeature')
        const AdImage = require('./AdImage')
        const AdProperty = require('./AdProperty')
        const AdBookmark = require('./AdBookmark')
        return {
            states: {
                relation: Model.BelongsToOneRelation,
                modelClass: State,
                join: {
                    from: 'system_ads.state_id',
                    to: 'states.id',
                },
            },
            cities: {
                relation: Model.BelongsToOneRelation,
                modelClass: City,
                join: {
                    from: 'system_ads.city_id',
                    to: 'cities.id',
                },
            },
            districts: {
                relation: Model.BelongsToOneRelation,
                modelClass: District,
                join: {
                    from: 'system_ads.district_id',
                    to: 'districts.id',
                },
            },
            sales_type: {
                relation: Model.BelongsToOneRelation,
                modelClass: SalesType,
                join: {
                    from: 'system_ads.ad_type',
                    to: 'sales_type.type_id',
                },
            },
            categories: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: 'system_ads.category_id',
                    to: 'categories.cat_id',
                },
            },
            agencies: {
                relation: Model.BelongsToOneRelation,
                modelClass: Agency,
                join: {
                    from: 'system_ads.agency_id',
                    to: 'agencies.id',
                },
            },
            advisors: {
                relation: Model.BelongsToOneRelation,
                modelClass: Advisor,
                join: {
                    from: 'system_ads.advisor_id',
                    to: 'advisors.id',
                },
            },
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'system_ads.user_id',
                    to: 'users.usr_id',
                },
            },
            ad_features: {
                relation: Model.HasManyRelation,
                modelClass: AdFeature,
                join: {
                    from: 'system_ads.ad_id',
                    to: 'ads_features.ad_id',
                },
            },
            ad_images: {
                relation: Model.HasManyRelation,
                modelClass: AdImage,
                join: {
                    from: 'system_ads.ad_id',
                    to: 'ads_images.ad_id',
                },
            },
            ad_properties: {
                relation: Model.HasManyRelation,
                modelClass: AdProperty,
                join: {
                    from: 'system_ads.ad_id',
                    to: 'ads_properties.ad_id',
                },
            },
            ad_bookmarks: {
                relation: Model.HasManyRelation,
                modelClass: AdBookmark,
                join: {
                    from: 'system_ads.ad_id',
                    to: 'ads_bookmarks.ad_id',
                },
            },
        };
    }
}
Ad.knex(db())
module.exports = Ad
