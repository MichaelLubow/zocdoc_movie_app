const React = require('react');

const stylesheet = require('./ticket_button.scss');

const classNames = require('classnames/bind');
const cx = classNames.bind(stylesheet);

class TicketButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hoverState: false
    };
  }

  buyMovieTicket(e) {
    e.stopPropagation();
    window.open('https://www.zocdoc.com/','_blank');
  }

  mouseOverHandler(e){
    this.setState({hoverState: true});
  }

  mouseOutHandler(e){
    this.setState({hoverState: false});
  }

  render(){
    let ticketButtonClasses= cx({
      ticketIcon: true,
      'fa fa-ticket animated': true,
      'rubberBand': this.state.hoverState
    });
    return (
      <div className={stylesheet.ticketButtonContainer}>
        <i className={ticketButtonClasses} onClick={this.buyMovieTicket} onMouseOver={(e) => this.mouseOverHandler(e)} onMouseOut={(e) => this.mouseOutHandler(e)}/>
      </div>
    );
  }
}

module.exports = TicketButton;