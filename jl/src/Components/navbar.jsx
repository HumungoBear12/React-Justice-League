import React from 'react'
import {Link} from "react-router-dom"

const navbar = () => {
  return (
    <div>
        <div className="navbar">
          <img className="nav-img" src="https://www.pngall.com/wp-content/uploads/13/Justice-League-Logo-PNG-Cutout.png" alt="" />
            {/* <div className="Header">
                <h2>THE JUSTICE LEAGUE</h2>
            </div> */}
            <div className="Links">
                <Link to="/"><h2 className='navlink'>Home</h2></Link>
                <Link to="/movies"><h2  className='navlink'>Movies</h2></Link>
                <Link><h2  className='navlink'>Games</h2></Link>
                <Link><h2 className='navlink'>TV-Shows</h2></Link>
                <Link to="/fullCharacters"><h2 className='navlink'>Full Characters</h2></Link>
                
                <div className="dropdown">
                  <button className="dropbtn">Members<i className="fa fa-caret-down"></i></button>
                      <div className="dropdown-content">
                      <a href="#">Superman</a>
                      <a href="#">Batman</a>
                      <a href="#">Wonder Woman</a>
                      <a href="#">Flash</a>
                      <a href="#">Green Latern</a>
                      <a href="#">Cyborg</a>
                      <a href="#">Auqaman</a>
                      <a href="#">Martian Manhunter</a>
                      <a href="#">Hawkgirl</a>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default navbar