import React, { Component } from 'react'

export default class UserInfo extends Component {
  constructor(){
    super();
    this.state = { 
      name:"Nguyễn Văn A",
      gender:"Nam",
      birthday:"06/03/2024",
      email:"nva@gmail.com",
      address:"Thanh Xuân, Hà Nội",

     }
  }
  render() {
    return (
      <div>
        <b style={{ fontSize: "30px" }}>B3</b>
        <br />
        <b style={{ marginLeft: "30px" }}>Thông tin cá nhân</b>
        <br/>
        <ul>
          <li><span>Họ và tên :</span><b>{this.state.name}</b></li><br />
          <li><span>Giới tính :</span><b>{this.state.gender}</b></li><br />
          <li><span>Ngày sinh :</span><b>{this.state.birthday}</b></li><br />
          <li><span>email :</span><b>{this.state.email}</b></li><br />
          <li><span>Địa chỉ :</span><b>{this.state.address}</b></li><br />
      </ul>
      </div>
    )
  }
}
