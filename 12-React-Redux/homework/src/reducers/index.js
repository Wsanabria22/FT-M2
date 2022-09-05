
const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default function rootReducer(state=initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      console.log(action.type)
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
    case 'GET_MOVIE_DETAIL':
      return {
        ...state,
        movieDetail: action.payload
      };
    case 'ADD_MOVIE_FAVORITE':
      return {
        ...state,
        // [...state.moviesFavorites, action.payload],
        moviesFavorites: state.moviesFavorites.concat(action.payload)
      };
    case 'REMOVE_MOVIE_FAVORITE':
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
      }
    case 'CLEAR_DETAIL':
      return {
        ...state,
        movieDetail: {}
      }
    default:
      return state;
  }

}