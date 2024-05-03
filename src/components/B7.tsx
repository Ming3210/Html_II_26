import React from 'react'
import './B7style.css';
export default function B7() {
  return (
    <div>
        <b style={{ fontSize: "30px" }}>B7</b>
        <nav>
            <header className='header'>
                Header
            </header>
        </nav>
        <main className='fix'>
            <div className="menu">
                Menu
            </div>
            <div className="main-menu">
                <div className="main">
                    Main
                </div>
                <div className="footer">
                    Footer
                </div>
            </div>
        </main>
    </div>
  )
}
