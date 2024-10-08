import React from 'react'
import {Link} from "react-router-dom"

const navbar = () => {
  return (
    <div>
        <div className="navbar">
          {/* <img className="nav-img" src="https://www.pngall.com/wp-content/uploads/13/Justice-League-Logo-PNG-Cutout.png" alt="" /> */}
            {/* <div className="Header">
                <h2>THE JUSTICE LEAGUE</h2>
            </div> */}
            <div className="Links">
                <Link to="/"><h2 className='navlink'>Home</h2></Link>
                <Link to="/movies"><h2  className='navlink'>Movies</h2></Link>
                <Link to="/games"><h2  className='navlink'>Games</h2></Link>
                <Link to='/shows'><h2 className='navlink'>TV-Shows</h2></Link>
                <Link to="/fullCharacters"><h2 className='navlink'>Full Characters</h2></Link>
                
                <div className="dropdown">
                  <button className="dropbtn">Members<i className="fa fa-caret-down"></i></button>
                      <div className="dropdown-content">
                      {/* <Link path='/superman'></Link> */}
                      <Link to="/superman">Superman</Link>
                      <Link to="/batman">Batman</Link>
                      <Link to="/wonderwoman">Wonder Woman</Link>
                      <Link to="/flash">The Flash</Link>
                      <Link to="/greenlatern">Green Latern</Link>
                      <Link to="/cyborg">Cyborg</Link>
                      <Link to="/auqaman">Auqaman</Link>
                      <Link to="/martianmanhunter">Martian Manhunter</Link>
                      <Link to="/hawkgirl">Hawkgirl</Link>
                      <Link to="/greenArrow">Green Arrow</Link>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default navbar