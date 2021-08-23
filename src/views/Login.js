import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
        <div className="col-md-6 flex-column justify-content-center" id="loginCol">
            <div className="flex-column container col-md-4 border-dark justify-content-center text-center" id="loginBox">
            <h5 className="">Login Page</h5>
            <form className="" onSubmit={this.props.handleLogIn}>
                <div className='form-group'>
                    <fieldset>
                        <label htmlFor='username'></label>
                        <input type='text' name='username' className='form-control' placeholder='Username'></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'></label>
                        <input type='password' name='password' className='form-control' placeholder='Password'></input>
                    </fieldset>
                    <input type='submit' className='btn btn-outline-dark my-3 justify-content-center' value="Log in"></input>
                </div>
            </form>
            </div>
        </div>
    )
}
}
