import React from 'react'
import JsonData from './data.json'

const MetadataDetails = (props) => {
    return(
      <div>
       
       <div className="col">
								<dt className="col-sm-3">UPC#</dt>
								<dd className="col-sm-9">00602507268510</dd>
						  
								<dt className="col-sm-3">Artist</dt>
								<dd className="col-sm-9">Uptown Production (All-In Rate)</dd>
							</div> 
							<div className="col">
									<label className="form-label">Select size</label>
									<div className="">
										<dt className="col-sm-3">UPC#</dt>
								<dd className="col-sm-9">00602507268510</dd>
						  
								<dt className="col-sm-3">Artist</dt>
								<dd className="col-sm-9">Uptown Production (All-In Rate)</dd>
									</div>
							</div> 
							<div className="col">
								<label className="form-label">Secondary Workflow</label>
								<div className="color-indigators d-flex align-items-center gap-2">
									 <div className="color-indigator-item bg-primary"></div> 
									 <div className="color-indigator-item bg-danger"></div> 
									 <div className="color-indigator-item bg-success"></div> 
									 <div className="color-indigator-item bg-warning"></div> 
								</div>
								<div className="d-flex gap-3 mt-3">
									<a href="#" className="btn btn-primary">View Secondary Workflow</a>
									
								</div>
							</div>
							<div className="col">
									<label className="form-label">Select size</label>
									<div className="">
										<dt className="col-sm-3">UPC#</dt>
								<dd className="col-sm-9">00602507268510</dd>
						  
								<dt className="col-sm-3">Artist</dt>
								<dd className="col-sm-9">Uptown Production (All-In Rate)</dd>
									</div>
							</div> 
      </div>
    );
}
 
 export default MetadataDetails;