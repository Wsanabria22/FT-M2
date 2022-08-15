import React from 'react';

// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   return (
//     <div>
//       <input type="text" placeholder='Ciudad...' />
//       <button onClick={onSearch}>Buscar</button>
//     </div>
//   )
// };

export default class SearchBar extends React.Component {
  render() {
    return (
          <div>
      <input type="text" placeholder='Ciudad...' />
      <button onClick={this.props.onSearch}>Buscar</button>
    </div>
    )
  }
}
