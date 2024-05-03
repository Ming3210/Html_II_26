import React from 'react'

export default function ColorBox() {
  return (
    <div>
      <b style={{ fontSize: "30px" }}>B4</b> <br />
        <div style={{ display: "flex",gap:"20px"}}>
        <div style={{ width: "200px",height:"200px",backgroundColor: "red",display: "flex",gap:"20px",justifyContent:"center" , alignItems:"center" }}>
            Box
            </div>
            <div style={{ width: "200px",height:"200px",backgroundColor: "blue",display: "flex",gap:"20px",justifyContent:"center" , alignItems:"center" }}>
            Box
            </div>
            <div style={{ width: "200px",height:"200px",backgroundColor: "green",display: "flex",gap:"20px",justifyContent:"center" , alignItems:"center" }}> 
            Box
            </div>
        </div>
    </div>
  )
}
