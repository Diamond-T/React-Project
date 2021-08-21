import React, { Component } from 'react'

export default class Log extends Component {
    render() {
        return (
            <form>
               
            <div className="col-lg-8 offset-lg-2">
                            <h3>Sign In</h3>
            
                            
                                
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
            
                            <div className="col-lg-8 offset-lg-2">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
            
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                   
                                    
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-2">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                
                            </p>
                        </div>    
                        </form>
                        
                    );
                }
            }