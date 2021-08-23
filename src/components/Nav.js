import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <h5 className="navbar-brand" href="#">Welcome!</h5>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/SignUp">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">Products </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">Cart </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {this.props.isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-outline-success nav-link" onClick={this.props.logOut} to="/">Logout</button>
              </li>
            ) : ( //if login in true show logout, of false, show login
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )
            }
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
