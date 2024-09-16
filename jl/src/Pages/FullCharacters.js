import {React, useState} from 'react';
import Characters from '../Util/Characters'

const FullCharacters = () => {
    const [char,setCharacter] =useState(Characters)
  return (
    <div>
        <h2 className="full-head">Members of the Justice League</h2>
        {/* <hr className="hr"/> */}
        <div className="Full-Char">
            {char.map((full)=>{
                const {id, Name, Image} = full;
                return(
                    <div key={id}>
                        <h3>{Name}</h3>
                        <img src={Image} alt="" />
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FullCharacters