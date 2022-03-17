import React, { useState, useReducer} from 'react';

const Events = () => {

const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };

  const [events, setEvents] = useState([
    event1,
    event2,
    event3

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


  const handleSubmit = (e) => {
    e.preventDefault();
    // const newEvents = {state: 'name'};
    setEvents([...events, state]);
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