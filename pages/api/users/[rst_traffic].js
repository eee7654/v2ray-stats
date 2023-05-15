
import { authApi } from '../../../config/iron_session'
import nextConnect from 'next-connect'
import { nextConnectConfig } from '../../../config/app_utils'
import Admin from '../../../models/Admin'
import User from '../../../models/User'
import Traffic from '../../../models/Traffic'
import { db_driver } from '../../../config/application'

const app = nextConnect(nextConnectConfig)

const prepareData = {
    sqlite:async(req,res)=>{

    },
    mysql:async(req,res)=>{
        let adminUser = await Admin.query().select('adminpassword').findById('1')
        if(req.query.admPass == adminUser.adminpassword){
            let myUser = await User.query()
            .select('username')
            .where('password',req.query.u != undefined ? req.query.u : '-')
            if(myUser.length != 0){
                myUser = myUser[0]
                let userTraffic = await Traffic.query()
                .patch({
                    download:0,
                    upload:0,
                    total:0
                })
                .where('user',myUser.username)
                if(userTraffic == 1){
                    res.status(200).json({status:'ok'})
                }else{
                    res.status(500).json({status:'intError'})
                }
                
            }else{
                res.status(404).json({status:'notFound'})
            }
        }else{
            res.status(403).json({status:'forbidden'})
        }
    }
}

app.get(async (req,res)=>{
    await prepareData[db_driver](req,res)
})

export default authApi(app)