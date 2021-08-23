import React, { Component } from 'react'
import Nav from './components/Nav';
import {Switch, Route} from'react-router-dom';
import Home from './views/Home';

import SignUp from './views/SignUp';
import Products from './views/Products';
import Cart from './views/Cart';
import Login from './views/Login';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
// handleAdd = (itemId) => {

// }

  handleLogIn = (e) => {  // onsubmit in login runs this function with this.props.handlelogin
    e.preventDefault(); //stops from re running
    console.log(e);
    // Grab data from form
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    let myHeaders = new Headers();
    const credentials = (`${username}:${password}`);
    myHeaders.append('Authorization', 'Basic ' + credentials);
  
    fetch('https://cart-api-66.herokuapp.com/tokens', {
      method: 'POST',
      headers: myHeaders
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        isLoggedIn: true  //dependent on if user is logged in
      })
      localStorage.setItem('token', data.token)  //hover set item
    })
  }


  handleLogOut = () => {
    localStorage.removeItem('token');
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    return (
      
      
      <div>
        <Nav isLoggedIn={this.state.isLoggedIn} logOut={this.handleLogOut}/>
        <Switch>
        <Route exact path="/login">
          <Login handleLogIn={this.handleLogIn}/> 
        </Route>
        
          <Route exact path ='/' render = { ()=> <Home/>}/>
          <Route exact path = '/SignUp' render ={ ()=> <SignUp/>}/>
          <Route exact path = '/Products' render ={ ()=> <Products/>}/>
          <Route exact path = '/Cart' render ={ ()=> <Cart/>}/>
          

         



          
        
          
        </Switch> 
        


        
    </div>

          

        
    
    )
  }
}





  

    
          
      
  


