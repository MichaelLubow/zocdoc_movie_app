const React = require('react');

const stylesheet = require('./search.scss');
const classNames = require('classnames');

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let iconClasses = classNames(stylesheet.searchIcon, "fa fa-search");
    return (
      <div className={stylesheet.searchContainer}>
        <div className={stylesheet.inputWrapper}>
          <i className={iconClasses} />
          <input className={stylesheet.searchInput} type="text" />
        </div>
      </div>
    );
  }
}

module.exports = Search;