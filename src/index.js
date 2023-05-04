
import { createRoot } from "react-dom/client";
import React, { useRef, useReducer, useState, useEffect  } from 'react';
import { useContext, createContext } from 'react';
import ProductDetails from './pages/productDetailsJSX';
import MetadataDetails from './pages/metadataDetailsJSX';

function IndexHomePageForm() {
  const [upc, setUpc] = useState("");
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState('');
  
  const handleSubmit = (event) => {
    //event.preventDefault();
    setUpdated(inputRef.current.value);
    sessionStorage.setItem("inputUpcValue", inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <li className="nav-item mobile-search-icon">
        <div className="position-relative">
          <input type="text" className="form-control ps-5" ref={inputRef} value={upc} placeholder="Enter UPC" onChange={(e) => setUpc(e.target.value)}  /> 
          <span className="position-absolute top-50 product-show translate-middle-y"><i className="bx bx-search"></i></span>
        </div>
      </li>
      <br/>
      <button className="btn btn-primary" type="submit">Search UPC</button>
    </form>
  );
}

const quickSearch = createRoot(document.getElementById('quickSearchWidget'));
quickSearch.render(
  <React.StrictMode>
    <IndexHomePageForm/>
  </React.StrictMode>
);

const productDetails = createRoot(document.getElementById('ProductDetailsWidget'));
productDetails.render(
  <React.StrictMode>
    <ProductDetails/>
  </React.StrictMode>
);


const metadataDetails = createRoot(document.getElementById('MetadataDetailsWidget'));
metadataDetails.render(
  <React.StrictMode>
    <MetadataDetails/>
  </React.StrictMode>
);
