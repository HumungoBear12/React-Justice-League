import React from 'react'

const navbar = () => {
  return (
    <div>
        <div class="navbar">
            {/* <div Class="Header">
                <h2>THE JUSTICE LEAGUE</h2>
            </div> */}
            <div Class="Links">
                <a>Home</a>
                <a>About</a>
                <a>Movies</a>
                <a>Games</a>
                <a>TV-Shows</a>
                <a>Full Characters</a>
                <div class="dropdown">
                <button class="dropbtn">Members<i class="fa fa-caret-down"></i></button>
                <div class="dropdown-content">
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