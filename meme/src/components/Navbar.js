import React from 'react'
import './component.css'

import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <div className='list'>
        <div className='nav-items logo2' style={{ marginLeft: "25px" }}><strong>Memes</strong></div>
        <div className='nav-items'><Link className="nav-link active" aria-current="page" to="/">Home</Link></div>
        <div className='nav-items'><Link className="nav-link active" aria-current="page" to="/about">About</Link></div>
        <div className='nav-items'><Link className="nav-link active" aria-current="page" to="/mymemes">My Images</Link></div>
      </div>
    </div>

  )
}

export default Navbar