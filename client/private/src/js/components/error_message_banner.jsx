const React = require('react');
const stylesheet = require('./error_message_banner.scss');

const classNames = require('classnames/bind');
const cx = classNames.bind(stylesheet);

class ErrorMessageBanner extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let errorMessageBannerClasses = cx({
      errorMessageBannerContainer: true,
      hidden: this.props.errorMessageBannerContainer
    });

    return (
      <div className={errorMessageBannerClasses}>
        You can only select a maximum of 3 movies at a time to compare
      </div>
    );
  }
}

module.exports = ErrorMessageBanner;