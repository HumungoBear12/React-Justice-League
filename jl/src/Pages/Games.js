import {React,useState} from 'react'
// import Movies from '../Util/Movies'
import Game from '../Util/Games'

const Games = () => {
    // const [mov,setMov] =useState(Movies)
    const [gam,setGam] =useState(Game)
  return (
    <div>
      <h2 className="mov-header">Justice League Games</h2>
        <div>
            {gam.map((full)=>{
                const {id, title, img, description} = full;
                return(
                    <div className='mov-container' key={id}>
                        <img src={img} alt={img}/>
                        <div>
                          <h2>{title}</h2>
                          {/* <hr/> */}
                          <p>{description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Games