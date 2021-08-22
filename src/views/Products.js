import React, { Component } from "react";
import ProductDisplay from "../components/ProductDisplay";



export default class ViewProducts extends Component {
  constructor(props) {
    super(props);
    console.log("component constructing");
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch("https://cart-api-66.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          products: data.products,
        });
      });
  }
  render() {
    return (
      <>
      <div className="container">
        <div className="row">
          {this.state.products.map((p, i) => <ProductDisplay product={p} key={i} />)}
        </div>

      </div>
      </>
    );
  }
}

