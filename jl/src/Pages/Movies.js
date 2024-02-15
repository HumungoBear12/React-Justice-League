import {React, useState} from 'react';
import Movies from '../Util/Movies'

const FullCharacters = () => {
    const [mov,setMov] =useState(Movies)
  return (
    <div>
      <h2 className="mov-header">Justice League Movies</h2>
        <div>
            {mov.map((full)=>{
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

export default FullCharacters