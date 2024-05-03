
import React from 'react'

export default function Functional() {
    let name:string = "Minh"
    let age:number = 19
    let myArr:string[] = ["HN","HCM","TH"]
  type obj = {
    name:string,
    age:number,
    address:string
  }
  let newStudent: obj = {
    name:"Minh",
    age:12,
    address:"address"
  }

  return (
    <div>
    Functional
    <p>Xin chào {name}</p>
    <p>T {age} tuổi</p>
    <ul>
        {
            myArr.map((item,index) =>{
                return <li key={index}>{item}</li>
            })
        }
    </ul>
    <p>{JSON.stringify(newStudent)}</p>
</div>
  )
}
