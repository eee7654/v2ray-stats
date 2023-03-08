
import { authApi } from '../../config/iron_session'
import nextConnect from 'next-connect'
import { runMiddleware,nextConnectConfig } from '../../config/app_utils'
import csrf from '../../config/csrf'
import { make } from 'simple-body-validator'

const app = nextConnect(nextConnectConfig)

app.post(async (req,res)=>{
    await runMiddleware(req,res,csrf)
    const uSession = req.session
    let reqBody = req.body
    
})

export default authApi(app)