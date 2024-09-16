import {React, useState} from 'react';
import Tv from '../Util/tv'

const Shows = () => {
    const [tv,setTv] =useState(Tv)
  return (
    <div>
      <h2 className="mov-header">Justice League TV-Shows</h2>
        <div className="tv-flex">
            {tv.map((full)=>{
                const {id, title, img, description} = full;
                return(
                    <div className="tv-div" key={id}>
                        <div>
                            <img src={img} alt={title}></img>
                        </div>
                        <h3>{title}</h3>
                        <hr/>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shows