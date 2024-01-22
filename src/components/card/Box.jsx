import React from 'react'

function Box({img, name, price}) {
  return (
    <div className='card'>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <img src="./image/stars.jpg" alt="" />
      <br />
      <div className="card-price">{price}</div>
      <div className="btns">
      <button className='btn'>Купить сейчас</button>
      <button className='btn2'>
        <img src="./image/SVG.png" alt="" />
      </button>
      </div>
    </div>
  )
}

export default Box