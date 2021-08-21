import React, { Component } from 'react'
import Nav from './components/Nav';
import {Switch, Route} from'react-router-dom';
import Home from './views/Log';
import About from'./views/Log';
import SignUp from './views/SignUp';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path ='/' render = { ()=> <Home/>}/>
          <Route exact path ='/Log' render ={ ()=> <About/>}/>
          <Route exact path = '/??' render ={ () => <logIn/>}/>
          <Route exact path = '/SignUp' render ={ ()=> <SignUp/>}/>


        </Switch>
      </div>
    )
  }
}