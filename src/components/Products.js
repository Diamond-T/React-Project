import React, { Component } from 'react'


export default class Products extends Component {
    constructor() {
      super();
      this.state = {
        article:[]
      
      };
    }
  
    componentDidMount() {
      fetch('https://cart-api-66.herokuapp.com/ ')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            article: data.article
        
          })
    })
  }
   render() {
     return (
       <div>
         <div className ="container">
           <div className ='row'>
             {this.state.article}
           </div>
         </div>
       </div>
     )
   }
}
