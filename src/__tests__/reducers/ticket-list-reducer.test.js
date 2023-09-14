import ticketListReducer from '../../reducers/ticket-list-reducer';
import { formatDistanceToNow } from 'date-fns';
import { updateTime } from '../../actions/index';

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Rhone & Remy',
    location: '4b',
    issue: 'hypothetical issue',
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
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
    const { names, location, issue, id, timeOpen, formattedWaitTime } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
      id: id
    };
    
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        formattedWaitTime: 'less than a minute ago',
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

  // testing timer
  test('Should add a formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: 'UPDATE_TIME',
      formattedWaitTime: '4 minutes ago',
      id: id
    };
    expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes ago'
      }
    });
  });

  test('updateTime should create UPDATE_TIME action', () => {
    expect(updateTime(1, 'less than a minute ago')).toEqual({
      type: 'UPDATE_TIME',
      id: 1,
      formattedWaitTime: 'less than a minute ago'
    });
  });

});
