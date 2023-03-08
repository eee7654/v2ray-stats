
export const validateEmail = (email)=>{
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}

export const validatePhone = (phone)=>{
    var re = /[0][9][0-9]{9}/
    return re.test(phone)
}

export const runMiddleware = (req,res,fn)=>{
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
  }

export const miliSec = 1000

export const day = 24*60*60

export const week = 7*day

export const month = 30*day

const ApartmentObj = {
  constructed_at:'',
  ownership_doc:'',
  area:'',
  room:'',
  floors_count:'',
  floor_number:'',
  units:'',
  building_status:''
}

const HouseObj = {
  constructed_at:'',
  ownership_doc:'',
  building_area:'',
  land_area:'',
  room:'',
  floors_count:'',
  building_status:''
}

const OldHouseObj = {
  constructed_at:'',
  ownership_doc:'',
  area:'',
}

const StoreObj = {
  constructed_at:'',
  ownership_doc:'',
  area:'',
  room:'',
}

const SiloObj = {
  constructed_at:'',
  ownership_doc:'',
  silo_area:'',
  land_area:'',
  room:'',
  electricity_details:'',
}

const AgriculturalObj = {
  ownership_doc:'',
  area:'',
}

export const BodyObj = {
  apt:ApartmentObj,
  hse:HouseObj,
  ohse:OldHouseObj,
  str:StoreObj,
  slo:SiloObj,
  agr:AgriculturalObj
}

export const years = (lastYear)=>{
  let years = []
  for(let i = lastYear;i >= 1300;i--){
      years.push(i)
  }
  return years
}

export const nextConnectConfig = {
  onError: (error, req, res)=>{
    res.status(500).json({ error: error.message })
  },
  onNoMatch: (req, res)=> {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
  attachParams: true
}

export const PaginationLabels = {firstPage:'ابتدا',lastPage:'انتها',nextPage:'بعدی',prevPage:'قبلی'}

export const isWindows = process.platform == 'win32'