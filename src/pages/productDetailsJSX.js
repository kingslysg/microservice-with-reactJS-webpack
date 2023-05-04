import React from 'react'
import JsonData from './data.json'

const ProductDetails = (props) => {
    return(
      <div>
       
           	<p className="card-text fs-6">Product Configuration : eSingle Audio/Single Trac.</p>
			<dl className="row">
			<dt className="col-sm-3">UPC#</dt>
			<dd className="col-sm-9">{sessionStorage.getItem("inputUpcValue")}</dd>
			
			<dt className="col-sm-3">Artist</dt>
			<dd className="col-sm-9">{JsonData[0].name}</dd>
			
			<dt className="col-sm-3">Title</dt>
			<dd className="col-sm-9">{JsonData[0].title}</dd>
			</dl>
      </div>
    );
}
 
 export default ProductDetails;