import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import * as a from './../actions';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      // if toggling back to form
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newTicket);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick called");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      //if editing ticket form open
      currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } 
    else if (this.state.selectedTicket != null) {
      // display ticket detail of specific ticket
      currentlyVisibleState = <TicketDetail 
                                ticket = {this.state.selectedTicket} 
                                onClickDelete = {this.handleDeletingTicket}
                                onClickEdit = {this.handleEditClick} />
      buttonText = "Return to ticket list";
    } 
    else if (this.props.formVisibleOnPage) {
      // display ticket submission form
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to ticket list";
    } else {
      // display ticket list
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
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

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;
