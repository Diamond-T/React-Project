import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: null
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
        const firstname = e.target.firstname.value;
        const lastname = e.target.lastna.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
    

       
      

        console.log(username, email, password, firstname,lastname);
        if (password !== password){
            console.log("These passwords don't match")
            return
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        const requestBody = JSON.stringify({
            "lastname": lastname,
            "firstname": firstname,
            "username": username,
            "email": email,
            "password": password 
        })

        console.log(requestBody);

        fetch('https://cart-api-66.herokuapp.com/users', {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    redirect: `/users/${data.id}`
                })
            })
            .catch(err => console.error(err))


    }

    render() {

        return (
            this.state.redirect ? 
            <Redirect to={this.state.redirect} /> :
            <form onSubmit={this.handleSubmit}>
                
            

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
      
                <a  href="/Products" class="btn btn-primary">submit</a>
                <p>Already registered <a href="/">sign in?</a></p>
                    
                
                </div>
            </form>
        );
    }
}

