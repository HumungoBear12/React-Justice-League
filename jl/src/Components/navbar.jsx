import React from 'react'
import {Link} from "react-router-dom"

const navbar = () => {
  return (
    <div>
        <div className="navbar">
            {/* <div className="Header">
                <h2>THE JUSTICE LEAGUE</h2>
            </div> */}
            <div className="Links">
                <Link>Home</Link>
                {/* <Link>About</Link> */}
                <Link>Movies</Link>
                <Link>Games</Link>
                <Link>TV-Shows</Link>
                <Link to="/fullCharacters">Full Characters</Link>
                
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