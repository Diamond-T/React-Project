import React, { Component } from 'react'


export default class NewPost extends Component {
    render() {
        const a = this.props.article
        return (
            <div>
                <div className="card" style="width">
  <img src={'${a.urlToImage}'} className="card-img-top"  alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <p className="card-text">{a.source.name}</p>
    <p className="card-text">{a.description} - by {a.author}</p>
  </div>
  
         
        </div>
    </div>
    )
    }
}
