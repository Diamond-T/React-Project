import React, { Component } from 'react'


export default class Cart extends Component {
    render() {
        return (
            <center><div>
                <h1>Check out here</h1>

                <a  href="/Products" class="btn btn-primary">Click here to check out and go back to products</a>

            </div></center>
        )
    }
}