const React = require('react');

const MovieCard = require('./movie_card');
const stylesheet = require('./movie_cards_container.scss');

class MovieCardsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={stylesheet.movieCardsContainer}>

        {this.props.movieData.map((movieData) => {
          return (
            <MovieCard
              key={movieData.Id}
              movieId={movieData.Id}
              name={movieData.Name}
              duration={movieData.Duration}
              rank={movieData.Rank}
              imageURL={movieData.imageURL}
              movieSelectionMode={this.props.movieSelectionMode}
              selectedMovieCount={this.props.selectedMovieCount}
              selectMovie={(e) => this.props.selectMovie(e)}
              openErrorMessageBanner={(e) => this.props.openErrorMessageBanner(e)}
              closeErrorMessageBanner={(e) => this.props.closeErrorMessageBanner(e)}
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
            />
          );
        })}

        <div className={stylesheet.hidden}>hi</div>
      </div>
    );

  }
}

module.exports = MovieCardsContainer;