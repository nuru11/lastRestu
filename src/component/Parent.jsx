
import React,{useState} from 'react'

import PlateData from '../PlateData'

import Plate from "./plate/Plate"
import Testimonial from './testimonial/Testimonial'

const Parent = ({handleClick}) => {
    
 


  return (
    <div>
       <div id="palte" className='plate'>
      <h className="plate-header">some of our plates</h>
      <div className="parent-item">
{PlateData.map((p) =>(
        <Plate key={p.id} p={p} handleClick={handleClick}  />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Parent