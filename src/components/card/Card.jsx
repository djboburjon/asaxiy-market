import React from 'react'
import './Card.css'
import Box from './Box'

function Card({data}) {
  return (
    <div className='container'>
      <div className='cards'>
        
        {
          data.map((item)=>{
            return <Box img={item.img} name={item.name} price={item.price}/>
          })
        }
      </div>
      
    </div>
  )
}

export default Card