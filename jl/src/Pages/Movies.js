import React from 'react'

const Movies = () => {
  return (
    <div className="movie-container">
        <h2>JUSTICE LEAGUE IN MOVIES</h2>
        {/* <hr/> */}
        <div className="movie-flex">
            <div className="anime">
                <h4 className="anime-text">Animated Movies</h4>
            </div>
            <div className="live">
                <h4 className='live-text'>Live Action Movies</h4>
            </div>
        </div>
    </div>
  )
}

export default Movies