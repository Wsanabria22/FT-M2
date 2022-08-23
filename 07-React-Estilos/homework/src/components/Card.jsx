import React from 'react';
import s from './styles/card.module.css';

export default function Card({max, min, name, img, onClose}) {
  return (
    <div className={s.card}>
      <h1 className={s.name}>{name}</h1>
      <button className={s.btn} onClick={onClose}>X</button>
      <div className={s.content}>        
        <div className={s.temp}>
          <h4>Min</h4>
          <h4>{min}</h4>
        </div>
        <div className={s.temp}>
          <h4>Max</h4>
          <h4>{max}</h4> 
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name} />
      </div>

    </div>
  )
};


// export default function Card({max, min, name, img, onClose}) {
//   return (
//     <div className={`${style.card}`}>
//       <div className={`${style.btnDiv}`}>
//         <button className={`${style.btn}`} onClick={onClose}>X</button>
//       </div> 
//       <div className={`${style.nameDiv}`}>
//         <h2>{name}</h2>
//       </div>
//       <div className={`${style.dataDiv}`}>        
//         <div className={`${style.itemDiv}`}>
//           <h4>Min</h4>
//           <h4>{min}</h4>
//         </div>
//         <div className={`${style.itemDiv}`}>
//           <h4>Max</h4>
//           <h4>{max}</h4> 
//         </div>
//         <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='' />
//       </div>

//     </div>
//   )
// };

