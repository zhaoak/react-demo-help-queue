import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
      selectedTicket: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      // if toggling back to form
      this.setState({
        formVisible: false,
        selectedTicket: null
      });
    } else {
      // if toggling back to ticket list
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisible: false });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      // display ticket detail of specific ticket
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to ticket list";
    }
    else if (this.state.formVisible) {
      // display ticket submission form
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to ticket list";
    } else {
      // display ticket list
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
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
