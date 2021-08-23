import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
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
        const firstname = e.target.first_name.value;
        const lastname = e.target.last_name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
    

       
      

        console.log(username, email, password, firstname,lastname);
        if (!password === password){
            console.log("These passwords don't match")
            return
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       
        const requestBody = JSON.stringify({
            "last_name": lastname,
            "first_name": firstname,
            "username": username,
            "email": email,
            "password": password 
        })

        console.log(requestBody);

        fetch('https://cart-api-66.herokuapp.com/create-user', {
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
                
            

                <div className="col-md-12 flex-column justify-content-center"><h3>Sign Up</h3>
            <div className="flex-column container col-md-6 border-dark justify-content-center" id="registerBox">
            <form onSubmit={this.handleSubmit}>
                    <label>First name</label>
                    <input name="first_name" type="text" className="form-control" placeholder="First name" />
                

                
                    <label>Last name</label>
                    <input name="last_name" type="text" className="form-control" placeholder="Last name" />
                
                
                    <label>UserName</label>
                    <input type="text" name="username" className="form-control" placeholder="UserName" />
               

            
                
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" />
                
                
                
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" />
                
                
      
                <button  type="submit" class="btn btn-primary">submit</button>
                <p>Already registered <Link to="/login">sign in?</Link></p>
                    
            </form>
            </div>
                </div>
        );
    }
}

