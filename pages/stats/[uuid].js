import Head from 'next/head'
import Inbound from '../../models/Inbound'
import ClientTraffic from '../../models/ClientTraffic'
import User from '../../models/User'
import { authPages } from '../../config/iron_session'
import moment from 'jalali-moment'
import DataCard from '../../components/data_card'
import { formatTraffic, formatTraffic2 } from '../../config/app_utils'
import { db_driver } from '../../config/application'

const prepareData = {
  sqlite:async(context)=>{
    let uInbound = await Inbound.query().select('*').findById(context.query.inbound)
    if(uInbound != undefined){
      let settings = JSON.parse(uInbound.settings)
      let clients = settings.clients
      let uClient = clients.find(client=>client.id == context.query.uuid)
      if(uClient != undefined){
        let dataArray = await ClientTraffic
        .query()
        .select('*')
        .where('email',uClient.email)
        .andWhere('inbound_id',context.query.inbound)
        if(dataArray.length == 1){
          const trafficData = dataArray[0]
          console.log(trafficData.expiry_time)
          if(trafficData.expiry_time != 0){
            trafficData.expiry_time = moment(trafficData.expiry_time/1000,'X').locale('fa').format('YYYY-MM-DD')
          }else{
            trafficData.expiry_time = 'Unlimited'
          }
          trafficData.up = formatTraffic(trafficData.up)
          trafficData.down = formatTraffic(trafficData.down)
          if(trafficData.total != 0){
            trafficData.total = formatTraffic(trafficData.total)
          }else{
            trafficData.total = 'Unlimited'
          }
          return {
            props:{
              trafficData:trafficData.toJSON()
            }
          }
        }else{
          return {
            notFound:true
          }
        }
      }else{
        return {
          notFound:true
        }
      }
    }else{
      return {
        notFound:true
      }
    }
  },
  mysql:async(context)=>{
    let myUser = await User.query()
    .select(
      'users.username as email',
      'users.finishdate as expiry_time',
      'users.traffic as total',
      'traffics.download as down',
      'traffics.upload as up'
    ).innerJoinRelated('traffics')
    .where('users.password',context.query.uuid)
    if(myUser.length != 0){
      myUser = myUser[0]
      if(myUser.expiry_time != null){
        if(myUser.expiry_time.length != 0){
          myUser.expiry_time = moment(myUser.expiry_time).locale('fa').format('YYYY-MM-DD')
        }else{
          myUser.expiry_time = 'Unlimited'
        }
      }else{
        myUser.expiry_time = 'Unlimited'
      }
      myUser.up = formatTraffic2(myUser.up)
      myUser.down = formatTraffic2(myUser.down)
      if(myUser.total != 0){
        myUser.total = formatTraffic2(myUser.total)
      }else{
        myUser.total = 'Unlimited'
      }
      console.log(context.query)
      return {
        props:{
          trafficData:myUser.toJSON()
        }
      }
    }else{
      return {
        notFound:true
      }
    }
  }
}

export const getServerSideProps = authPages(async (context) => {
  return await prepareData[db_driver](context)
});

export default function Home(srvData) {
  const trafficData = srvData.trafficData
  return (
    <>
      <Head>
        <title>Traffic Stats</title>
        <meta name="description" content="Clients Usage"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap"/>
      </Head>
      <div className="d-flex justify-content-center align-items-center nextBody">
        <div className="main-card" />
        <DataCard trafficData={trafficData}/>
      </div>
    </>
  )
}