const React = require('react');

const stylesheet = require('./movie_rank.scss');

class MovieRank extends React.Component{
  constructor(props){
    super(props);
  }

  determineSuffixedRank(rank) {//todo needs fix for 21 etc.
    let suffix = '';
    if(rank === 1){
      suffix = 'st';
    }
    else if(rank === 2){
      suffix = 'nd';
    }
    else if(rank === 3){
      suffix = 'rd';
    }
    else {
      suffix = 'th';
    }
    return suffix;
  }

  render(){
    const suffix = this.determineSuffixedRank(parseInt(this.props.rank));
    return (
      <div className={stylesheet.rankContainer}>
        <span className={stylesheet.rank}>{this.props.rank}</span>
        <span className={stylesheet.suffix}>{suffix}</span>
      </div>
    );
  }
}

module.exports = MovieRank;