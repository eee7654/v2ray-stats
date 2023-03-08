'use strict'
const params = require('./application')
const generator = require('generate-password')
const axios = require('axios')

class SmsClient {
    sendOTP(phone){
        return new Promise((resolve,reject)=>{
            var otp = generator.generate({
                length: 5,
                numbers: true,
                lowercase: false,
                uppercase: false
            })
            axios.post(params.sms_url,{
                op: "pattern",
                user: params.sms_user,
                pass: params.sms_pass,
                fromNum: params.sms_num,
                toNum: phone,
                patternCode: params.sms_otp_pattern,
                inputData: [
                    { vcode: otp }
                ]
            })
            .then((response)=>{
                if(!Array.isArray(response.data)){
                    resolve(otp)
                }else{
                    console.error(response.data[1])
                    reject(response.data[1])
                }
            })
            .catch((reason)=>{
                console.error(reason)
                reject(reason)
            })
        })
    }

    sendAccVerfied(phone){
        return new Promise((resolve,reject)=>{
            axios.post(params.sms_url,{
                op: "pattern",
                user: params.sms_user,
                pass: params.sms_pass,
                fromNum: params.sms_num,
                toNum: phone,
                patternCode: params.sms_verify_pattern,
                inputData: []
            })
            .then((response)=>{
                if(!Array.isArray(response.data)){
                    resolve()
                }else{
                    console.error(response.data[1])
                    reject(response.data[1])
                }
            })
            .catch((reason)=>{
                console.error(reason)
                reject(reason)
            })
        })
    }
}
module.exports = SmsClient