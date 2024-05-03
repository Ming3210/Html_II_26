import React from 'react'

export default function formatName() {
  type User = {
    firstName: string;
    lastName: string;
  }
  
    const user = {
        firstName: "Nguyễn Văn",
        lastName: "Minh"
    }
    function formatName(person:User){
      return person.firstName + " " + person.lastName;
    }
  return (
    <div>
      <b style={{ fontSize: "30px" }}>B6</b>
      <p>
      {formatName(user)}
      </p>
    </div>
  )
}
