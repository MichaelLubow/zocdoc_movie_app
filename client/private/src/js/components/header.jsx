const React = require('react');
const CompareMoviesButton = require('./compare_movies_button');

const stylesheet = require('./header.scss');

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={stylesheet.headerContainer}>
        <div className={stylesheet.innerHeaderContainer}>
          <div className={stylesheet.title}>ZocMovie</div>
          <CompareMoviesButton
            movieSelectionMode={this.props.movieSelectionMode}
            activateMovieSelectionMode={this.props.activateMovieSelectionMode}
            selectedMovieCount={this.props.selectedMovieCount}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
          />
        </div>
      </div>
    );
  }
}

module.exports = Header;