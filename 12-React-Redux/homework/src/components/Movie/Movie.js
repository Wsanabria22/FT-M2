import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
  

  componentDidMount(){
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID);
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }

    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>  
                <h2>{this.props.movie.Year}</h2>
                <h2>{this.props.movie.Rated}</h2>
                <h2>{this.props.movie.Release}</h2>
                <h2>{this.props.movie.Genre}</h2>
                <img src={this.props.movie.Poster}/>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    movie: state.movieDetail
  }
}

function mapDispachToProps(dispatch){
  return {
    getMovieDetail: movieID => dispatch(getMovieDetail(movieID)),
    clearDetail: () => dispatch(clearDetail())
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Movie);