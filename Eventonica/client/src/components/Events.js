import React, { useState, useReducer, useEffect } from 'react';

const Events = () => {



  const [events, setEvents] = useState([
  

  ])

  // const [ name, setName] = useState('');


  const initialState = {
    id: '',
    name: '',
    description: '',
    category: ''
  };

  const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
      case 'editName':
        console.log('Logged if the editName action is being dispatched');
        return { ...state, name: action.payload };
  
      case 'editDescription':
        return { ...state, description: action.payload };
  
      case 'editCategory':
        return { ...state, category: action.payload };
  
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getEvents = async () => {
    const response = await fetch('http://localhost:4000/events');
    const event = await response.json();
    setEvents(event);
  };
  
  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getEvents();
  },[]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // const newEvents = {state: 'name'};
    setEvents([...events, state]);
    // getEvents()
  };

  console.log(events)

  

return (

    <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
 
            {events.map((event, index) =>
            <li key={index}> { event.name} </li>
        )}
        </ul>



              <h3>Add Event</h3>
              <form id="add-event" action="#" onSubmit = {handleSubmit}>
                <fieldset>
                  <label>Name</label>
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                      dispatch({
                      type: 'editName',
                      payload: e.target.value
                      })
                  }
                  />
                 <label>Date</label> 
                  <input
                    type="number"
                    value={state.date}
                    onChange={(e) =>
                        dispatch({
                        type: 'editDate',
                        payload: e.target.value
                        })
                    }
                    />
                    <label>Description</label>
                    <input
                    type="text"
                    value={state.description}
                    onChange={(e) =>
                        dispatch({
                        type: 'editDescription',
                        payload: e.target.value
                        })
                    }
                    />
                    <label>Category</label>
                    <input
                    type="text"
                    value={state.category}
                    onChange={(e) =>
                        dispatch({
                        type: 'editCategory',
                        payload: e.target.value
                        })
                    }
                    />
                </fieldset>
                {/* Add more form fields here */}
            
                <input type="submit" />
              </form>
            </div>
          </section>

)}

export default Events