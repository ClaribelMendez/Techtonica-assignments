import { useState } from 'react';


const Form = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value)
        props.addItem(value);
        console.log(value)
        setValue('')
    };

    return (
        <div className="ListMain">
          <div className="Header">
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="Please enter an item"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                />
                <button type="submit">add</button>
              </form>
            </div>
        </div>
    )
}


export default Form