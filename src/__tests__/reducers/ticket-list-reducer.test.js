import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Rhone & Remy',
    location: '4b',
    issue: 'hypothetical issue',
    id: 1
  };

  const currentState = {
    1: {
      names: 'Rhone & Remy',
      location: '4b',
      issue: 'hypothetical issue',
      id: 1
    }, 2: {
      names: 'Chrome & Firefox',
      location: '4c',
      issue: 'hypothetical issue',
      id: 2
    }
  }
  
  // testing if returns current state
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  // testing adding new ticket to state
  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  // testing deleting ticket from state
  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Chrome & Firefox',
        location: '4c',
        issue: 'hypothetical issue',
        id: 2
      }
    });
  });

});
