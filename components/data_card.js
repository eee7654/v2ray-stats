

const DataCard = ({trafficData})=>{
    return (
        <div className='data-card'>
          <div className="row row-info mt-3">
            <div className="col d-flex col-12">
              <h6 className="titles">Name</h6>
            </div>
            <div className="col d-flex align-items-center col-12 mb-4">
              <h5 className="account-name">{trafficData.email}</h5>
            </div>
          </div>
          <div className="row row-info my-3">
            <div className="col d-flex col-6">
              <h6 className="titles head-5 fw-500">
                Expire date:
              </h6>
            </div>
            <div className="col d-flex align-items-center col-6">
              <h5 className="head-5 fw-600">{trafficData.expiry_time}</h5>
            </div>
          </div>
          <div className="row row-info my-3">
            <div className="col d-flex col-6">
              <h6 className="titles head-5">Download:</h6>
            </div>
            <div className="col d-flex align-items-center col-6">
              <h5 className="head-5 fw-600">{trafficData.down}</h5>
            </div>
          </div>
          <div className="row row-info my-3">
            <div className="col d-flex col-6">
              <h6 className="titles head-5">Upload:</h6>
            </div>
            <div className="col d-flex align-items-center col-6">
              <h5 className="head-5 fw-600">{trafficData.up}</h5>
            </div>
          </div>
          <div className="row row-info my-3">
            <div className="col d-flex col-6">
              <h6 className="titles head-5">Total:</h6>
            </div>
            <div className="col d-flex align-items-center col-6">
              <h5 className="head-5 fw-600">{trafficData.total}</h5>
            </div>
          </div>
        </div>
    )
}

export default DataCard