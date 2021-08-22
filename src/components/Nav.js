import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
          
          <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Welcome!</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Sign In<span class="sr-only"></span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/SignUp">Sign Up</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Products">Products </Link>
              </li>
              

              <li class="nav-item">
                <Link class="nav-link" to="/Cart">Cart </Link>
              </li>
            </ul>
            
          </div>
          <div className="auth-wrapper">
        <div className="auth-inner">
          </div>
        </div>
        </nav>
        )
        }
      }
