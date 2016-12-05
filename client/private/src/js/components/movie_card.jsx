const React = require('react');
const MovieRank = require('./movie_rank');
const TicketButton = require('./ticket_button');

const stylesheet = require("./movie_card.scss");

const classNames = require('classnames/bind');
const cx = classNames.bind(stylesheet);

class MovieCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hoverState: false,
      selected: false
    };
  }

  displayMovieDetails(e){
    this.props.openModal(this.props.movieId);
  }

  selectMovieForCompare(e){
    if(!this.state.selected && this.props.selectedMovieCount >= 3) {
      this.props.openErrorMessageBanner();
    }
    else {
      this.setState({selected: !this.state.selected});
      this.props.selectMovie(this.props.movieId);
      this.props.closeErrorMessageBanner();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.movieSelectionMode === false){
      this.setState({selected: false});
    }
  }

  render(){
    let clickHandler = null;
    if(this.props.movieSelectionMode){
      clickHandler = (e) => this.selectMovieForCompare(e);
    }
    else {
      clickHandler = (e) => this.displayMovieDetails(e);
    }

    let movieCardContainerClasses= cx({
      movieCardContainer: true,
      selected: this.props.movieSelectionMode && this.state.selected
    });

    let imageContainerStyle = {
      backgroundImage: 'url(' + this.props.imageURL + ')'
    };

    return (
      <div className={movieCardContainerClasses} onClick={clickHandler}>
        <div style={imageContainerStyle} className={stylesheet.imageContainer}></div>
        <MovieRank rank={this.props.rank} />
        <TicketButton />
        <div className={stylesheet.infoContainer}>
          <div className={stylesheet.movieName}>{this.props.name}</div>
          <div className={stylesheet.movieDuration}>{this.props.duration}</div>
        </div>
      </div>
    );
  }
}

module.exports = MovieCard;