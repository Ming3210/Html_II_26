
export  default function B2
() {
    function add(a:number,b:number){
        return a+b
      }
    function subtract(a:number,b:number){
        return a-b
      }
    function mul(a:number,b:number){
        return a*b
      }
    function devide(a:number,b:number){
        return a/b
      }
      let a = 10
      let b = 10
  return (
    <div>
          <b style={{ fontSize: "30px" }}>B2</b>
        <br />
        <b>Danh sách kết quả</b>
        <br/>
        <ul>
          <li>{a} + {b} = {add(a,b)}</li>
          <li>{a} - {b} = {subtract(a,b)}</li>
          <li>{a} * {b} = {mul(a,b)}</li>
          <li>{a} / {b} = {devide(a,b)}</li>
        
      </ul>
    </div>
  )
}
