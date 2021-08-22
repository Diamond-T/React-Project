import React, { Component } from 'react'



export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('https://cart-api-66.herokuapp.com/users')
            .then(r => r.json())
            .then(data => {
                console.log(data);
                this.setState({
                    users: data.users
                })
            })
    }


    render() {
        return (
            <div>
                This is the Users Page.
                <div className='row'>
                    {this.state.users.map((u) =><UserInfo user={u} />)}
                </div>
            </div>
        )
    }
}