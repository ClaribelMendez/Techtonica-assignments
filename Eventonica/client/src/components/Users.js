import React, { useState } from 'react'


function Users() {

const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

const [users, setUsers] = useState([marlin, nemo, dory]);
const [ name, setName] = useState('');
const [ email, setEmail] = useState('');



const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {name,email};
    setUsers([...users, newUser]);
  };


return (


<section className="user-management">

    
<h2>User Management</h2>

<ul id="users-list">
 
            {users.map((user, index) =>
            <li key={index}> { user.name} {user.email} </li>
            )}
        </ul>


<div>
  <h3>Add User</h3>
  <form id="add-user" action="#" onSubmit ={handleSubmit}>
    <fieldset>
      <label>Name</label>
      <input 
      type="text"
      id="add-user-name"
      value={name}
      onChange={(e) => setName(e.target.value)}

      />
      <label>Email</label>
      <input 
      type="text"
      id="add-user-email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

<label>ID</label>
      <input 
      type="text"
      id="add-user-id"
      
      onChange={(e) => setName(e.target.value)}
      />
    </fieldset>
    
    {/* Add more form fields here */}
    
    <input type="submit" value="Add"  />
  </form>
</div>

<div>
  <h3>Delete User</h3>
  <form id="delete-user" action="#">
    <fieldset>
      <label>User ID</label>
      <input type="text" id="delete-user-id" />
    </fieldset>
    <input type="submit" />
  </form>
</div>
</section>
)


}

export default Users


