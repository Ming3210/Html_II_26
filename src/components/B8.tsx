import './B8style.css'

export default function B8() {
  return (
    
    <div>
        <b style={{ fontSize: "30px" }}>B8</b>
        <div>
            <header className='header1'>
                Header
            </header>
            <nav className='nav1'>
                Navigation
            </nav>
        </div>
        <main style={{display:"flex"}}>
            <div className="menu1">
                Menu
            </div>
            <div className="main1">
                <div className='row1'>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                </div>

                <div className='row1'>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                </div>

                <div className='row1'>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                </div>
                
                <div className='row1'>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                    <div className='cart1'>cart</div>
                </div>
                
            </div>
            <div className="article1">
                Article
            </div>
        </main>
    </div>
  )
}
