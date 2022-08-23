import React from 'react';
import s from './styles/searchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.search}>
      <input className={s.input} type="text" placeholder='Ciudad...' />
      <button className={s.btn} onClick={onSearch}>Buscar</button>
    </div>
  )
};


// import style from './SearchBar.module.css';

// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   return (
//     <div className={`${style.divSearch}`}>
//       <input className={`${style.inputSearch}`} type="text" placeholder='Ciudad...' />
//       <button className={`${style.btnSearch}`} onClick={onSearch}>Buscar</button>
//     </div>
//   )
// };