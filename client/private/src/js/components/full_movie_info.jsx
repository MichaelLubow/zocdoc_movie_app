const React = require('react');

const stylesheet = require('./full_movie_info.scss');

class FullMovieInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const movieData = this.props.activeMovieData;
    return (
      <div className={stylesheet.fullMovieInfoContainer}>
        <img className={stylesheet.movieImage} src={movieData.movieImage} />
        <div className={stylesheet.primaryInfoSection}>
          <div className={stylesheet.name}>{movieData.Name}</div>
          <div className={stylesheet.duration}>{movieData.Duration}</div>
          <div className={stylesheet.genreContainer}>
            {
              movieData.Genres.map(function(genre){
                return (<div className={stylesheet.genre}>{genre}</div>);
              })
            }
          </div>
        </div>
        <div className={stylesheet.descriptionContainer}>
          <div className={stylesheet.descriptionLabel}>Plot Summary</div>
          <div className={stylesheet.description}>
            {movieData.Description}
          </div>
        </div>
        <div className={stylesheet.creatorsContainer}>
          <div className={stylesheet.directorContainer}>
            <div className={stylesheet.directorLabel}>Director</div>
            <div className={stylesheet.director}>{movieData.Director}</div>
          </div>
          <div className={stylesheet.actorContainer}>
            <div className={stylesheet.actorLabel}>Actors</div>
            <div className={stylesheet.actorNameContainer}>
              {
                movieData.Actors.map(function(actor){
                  return (<div className={stylesheet.actor}>{actor}</div>);
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = FullMovieInfo;