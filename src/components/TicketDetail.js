import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket, onClickDelete  } = props;
  
  return (
    <React.Fragment>
      <h1>Ticket Details</h1>
        <h3>{ticket.location} - {ticket.names}</h3>
        <p><em>{ticket.issue}</em></p>
        <button type="button" onClick={() => onClickDelete(ticket.id)}>Close Ticket</button>
        <hr/>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickDelete: PropTypes.func
};

export default TicketDetail;
