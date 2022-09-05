// http://www.omdbapi.com/?i=tt3896198&apikey=7e6d6eea



// export function getMovies(title) {
//     return function(dispatch) {
//         console.log(title);
//         return fetch(`http://www.omdbapi.com/?apikey=7e6d6eea&s=${title}`)
//           .then(response => response.json())
//           .then(movies => {
//             dispatch({ type: "GET_MOVIES", payload: movies });
//           });
//       };
// }

export function getMovies(titulo) {
    console.log('ingresa a acciones')
    return function(dispatch){
      return fetch("http://www.omdbapi.com/?apikey=7e6d6eea&s=" + titulo)
        .then(response => response.json())
        .then(json => dispatch({ type: "GET_MOVIES", payload: json }))
    };
  }

export function getMovieDetail(id) {
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?apikey=7e6d6eea&i=" + id)
        .then(response => response.json())
        .then(json => dispatch({ type: "GET_MOVIE_DETAIL", payload: json }))
    }
}

export function clearDetail() {
  return {
    type: 'CLEAR_DETAIL'
  }
}

export function addMovieFavorite(movie) {
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload: movie
    }
}

export function removeMovieFavorite(id) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        id
    }
}
