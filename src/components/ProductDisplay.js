import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
//PUT IN DIAMOND MAP
export default class Productdisplay extends Component {
    render() {
      const p = this.props.product
        return (
          <div className="col-lg-3 col-md-3 col-sm-6 col justify-content-center">
              {/* <Link className=""></Link> */}
        <div className="card" id="productCard">
              <img src={`${p.image_url}`} id="productImg" className="card-img-top" alt="..." />
        
          <div className="card-body">
              <h3 className="card-title text-md-center">{p.name}</h3>
              <p className="card-text text-sm-center">
              {p.description}<br/>
              <div className="priceDiv">{p.price}</div>
          </p>
         
          <button to="/addToCart" type="button" id="buttonId" className="btn btn-outline-primary d-grid gap-2 col-5 mx-auto">Add to Cart</button>
          
        </div>
        </div>
            </div>
        )
    }
}