import React, {useContext} from "react";
import PropTypes from "prop-types";
import {ThemeContext} from '../context/theme-context';

function TicketDetail(props) {
  const { ticket, onClickDelete, onClickEdit  } = props;

  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme.buttonBackground,
    color: theme.textColor
  }
  
  return (
    <React.Fragment>
      <h1>Ticket Details</h1>
        <h3>{ticket.location} - {ticket.names}</h3>
        <p><em>{ticket.issue}</em></p>
        <button style={styles} type="button" onClick={props.onClickEdit }>Update Ticket</button>
        <button style={styles} type="button" onClick={() => onClickDelete(ticket.id)}>Close Ticket</button>
        <hr/>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;
