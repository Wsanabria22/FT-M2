import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h2>{name}</h2>
      <h4>Min</h4>
      <div>{min}</div>
      <h4>Max</h4>
      <div>{max}</div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='' />
    </div>
  )
};