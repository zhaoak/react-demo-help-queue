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

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TicketControl;
