import React from 'react';
import './Car.css';

function Car({ erpCode, name, agency, insurance, pic, price }) {
  console.log(price);
  return (
    <div className='car'>
      <div className='car__top'>
        <div className='car__title'>
          <h3>{name}</h3>
        </div>
        <div className='car__price'>
          <h2>{price.toLocaleString()}원</h2>
        </div>
      </div>

      <img src={pic} alt={name} title={name} />
    </div>
  );
}

export default Car;
