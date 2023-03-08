import Head from 'next/head'
import Inbound from '../../models/Inbound'
import ClientTraffic from '../../models/ClientTraffic'
import { authPages } from '../../config/iron_session'
import moment from 'jalali-moment'
import DataCard from '../../components/data_card'
import { formatTraffic } from '../../config/app_utils'

export const getServerSideProps = authPages(async (context) => {
  console.log(context.query)
  let uInbound = await Inbound.query().select('*').findById(context.query.inbound)
  if(uInbound != undefined){
    let settings = JSON.parse(uInbound.settings)
    let clients = settings.clients
    let uClient = clients.find(client=>client.id == context.query.uuid)
    let dataArray = await ClientTraffic
    .query()
    .select('*')
    .where('email',uClient.email)
    .andWhere('inbound_id',context.query.inbound)
    if(dataArray.length == 1){
      const trafficData = dataArray[0]
      trafficData.expiry_time = moment(trafficData.expiry_time/1000,'X').locale('fa').format('YYYY-MM-DD')
      trafficData.up = formatTraffic(trafficData.up)
      trafficData.down = formatTraffic(trafficData.down)
      trafficData.total = formatTraffic(trafficData.total)
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
});

export default function Home(srvData) {
  const trafficData = srvData.trafficData
  return (
    <>
      <Head>
        <title>V2rayStats</title>
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