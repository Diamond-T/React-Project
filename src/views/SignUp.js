import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                
                

                <div className="col-lg-8 offset-lg-2"><h3>Sign Up</h3>
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="col-lg-8 offset-lg-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="col-lg-8 offset-lg-2">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="UserName" />
                </div>

            
                <div className="col-lg-8 offset-lg-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                
                <div className="col-lg-8 offset-lg-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="col-lg-8 offset-lg-2">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
                </div>
            </form>
        );
    }
}

