import React, { Component } from 'react'





export default class Log extends Component {
    render() {
        return (
            <form>
                
               
            <div className="col-lg-8 offset-lg-2">
                            <h3>Sign In</h3>
            
                            
                                
                                <label>Username</label>
                                <input type="email" className="form-control" placeholder="Enter UserName" />
                            </div>
                            <div className="col-lg-8 offset-lg-2"></div>

            
                            <div className="col-lg-8 offset-lg-2">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>
            
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                   
                                    
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-2">
                            
                            <p className="forgot-password text-right">
                            <a  href="/Products" class="btn btn-primary">submit</a>
                            </p>
                        </div>    
                        </form>
                        






                        
                    );
                }
            }