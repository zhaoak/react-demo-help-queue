import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to ticket list";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button type="button" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
