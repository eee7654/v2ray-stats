
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

export const isWindows = process.platform == 'win32'

export const formatTraffic = (trafficBytes)=> {
  if (trafficBytes < 1024) {
    return (trafficBytes / 1).toFixed(2) + " B";
  } else if (trafficBytes < 1024 * 1024) {
    return (trafficBytes / 1024).toFixed(2) + " KB";
  } else if (trafficBytes < 1024 * 1024 * 1024) {
    return (trafficBytes / (1024 * 1024)).toFixed(2) + " MB";
  } else if (trafficBytes < 1024 * 1024 * 1024 * 1024) {
    return (trafficBytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  } else if (trafficBytes < 1024 * 1024 * 1024 * 1024 * 1024) {
    return (trafficBytes / (1024 * 1024 * 1024 * 1024)).toFixed(2) + " TB";
  } else {
    return (trafficBytes / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(2) + " EB";
  }
}

export const formatTraffic2 = (trafficBytes)=> {
  if (trafficBytes < 1024) {
    return (trafficBytes / 1).toFixed(2) + " MB";
  } else if (trafficBytes < 1024 * 1024) {
    return (trafficBytes / 1024).toFixed(2) + " GB";
  } 
}