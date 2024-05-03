import React, { Component } from 'react'

export default class classComponent extends Component {
    constructor(){
        super();
        this.state = { 
            name:"Mib",
            address:"HN",
            cart:[{
                id:1,
                product:"Phone",
                quantity:1,
            },
            
            ],
            age:20
         }
    }

  render() {
    return (
      <div>ClassComponents
        <p>Xin chao {this.state.name}</p>
        <p>{this.state.address}</p>
        <ul>
            {this.state.cart.map((item,index)=>{
                return <li key={index}>{item.product}</li>
            })}
        </ul>
      </div>
    )
  }
}
