const React = require('react');
const CompareMovieInfo = require('./compare_movie_info');
const stylesheet = require('./compare_movies.scss');

class CompareMovies extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={stylesheet.compareMoviesContainer}>
        {
          this.props.comparingMovieData.map(function(movieData){
            return (
              <CompareMovieInfo
                key={movieData.Id}
                movieData={movieData}
              />
            );
          })
        }
      </div>
    );
  }
}

module.exports = CompareMovies;