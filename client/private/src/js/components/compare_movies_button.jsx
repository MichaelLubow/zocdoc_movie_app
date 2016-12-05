const React = require('react');
const stylesheet = require('./compare_movies_button.scss');

const classNames = require('classnames/bind');
const cx = classNames.bind(stylesheet);

class CompareMoviesButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let compareButtonClasses = cx({
      compareButton: true,
      active: this.props.movieSelectionMode
    });

    let selectedMoviesLabelClasses = cx({
      selectedMoviesLabel: true,
      hidden: !this.props.movieSelectionMode
    });

    let compareMoviesSubmitButtonClasses = cx({
      compareMoviesSubmitButton: true,
      hidden: this.props.selectedMovieCount < 2
    });

    return (
      <div className={stylesheet.compareButtonContainer}>
        <div className={selectedMoviesLabelClasses}>
          <span className={stylesheet.numSelected}>{this.props.selectedMovieCount}</span><span>movies selected</span>
          <button className={compareMoviesSubmitButtonClasses} onClick={(e) => this.props.openModal(e)}>
            <i className="fa fa-long-arrow-right" />
          </button>
        </div>
        <button className={compareButtonClasses} onClick={() => this.props.activateMovieSelectionMode()}>Compare Movies</button>
      </div>
    );
  }
}

module.exports = CompareMoviesButton;