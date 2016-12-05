const React = require('react');

const stylesheet = require('./compare_movie_info.scss');

class CompareMovieInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={stylesheet.movieInfoContainer}>
        <img className={stylesheet.movieImage} src={this.props.movieData.movieImage} />
        <div className={stylesheet.name}>{this.props.movieData.Name}</div>
        <div className={stylesheet.duration}>{this.props.movieData.Duration}</div>
        <div className={stylesheet.genreContainer}>
          {
            this.props.movieData.Genres.map(function(genre){
              return (<span className={stylesheet.genre}>{genre}</span>);
            })
          }
        </div>
        <div className={stylesheet.descriptionContainer}>
          <div className={stylesheet.descriptionLabel}>Plot Summary</div>
          <div className={stylesheet.description}>
            {this.props.movieData.Description}
          </div>
        </div>
        <div className={stylesheet.creatorsContainer}>
          <div className={stylesheet.directorContainer}>
            <div className={stylesheet.directorLabel}>Director</div>
            <div className={stylesheet.director}>{this.props.movieData.Director}</div>
          </div>
          <div className={stylesheet.actorContainer}>
            <div className={stylesheet.actorLabel}>Actors</div>
            <div className={stylesheet.actorNameContainer}>
              {
                this.props.movieData.Actors.map(function(actor){
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

module.exports = CompareMovieInfo;