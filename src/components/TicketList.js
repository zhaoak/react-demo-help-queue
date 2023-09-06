import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'firebase no save record'
  },
  {
    names: 'Donko and Bonko',
    location: '3B',
    issue: 'horse crimes'
  },
  {
    names: 'Snuggly and aster',
    location: 'C54',
    issue: 'sleeby'
  }
];

function TicketList() {
  return (
    <React.Fragment>
      {mainTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default TicketList;
