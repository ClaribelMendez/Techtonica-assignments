import React, { useState, useEffect } from 'react'
import DeleteUser from './DeleteUser'


const Users = () => {

  const [users, setUsers] = useState([]);

console.log('users', users);

const getUsers = () => {
  fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then((res) => setUsers(res.users));
};

useEffect(() => {
  // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  getUsers();
}, []);

// let postUsers = async (newUser) => 
//    await fetch('http://localhost:4000/users', {
//     method: 'POST',
//     body: JSON.stringify(newUser)

// })

// const postUsers = (users) => {
// let tempUser = users[0];
// fetch('http://localhost:4000/users', {
//   method: 'POST', 
//   headers: {'Content-Type': 'application/json'},

//   body: JSON.stringify({tempUser}),
// }) .then(() => {
//       console.log('New user added')
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });




// const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
// const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
// const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

// const [users, setUsers] = useState([marlin, nemo, dory]);
const [ name, setName] = useState('');
const [ email, setEmail] = useState('');
const [ id, setId] = useState('');

const postUsers = (users) => {
  const tempUser = users[0];
  fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 
    body: JSON.stringify(tempUser)
  },
  }).then((response) => {
      response.json()
  }).then((data) => 
  console.log(data)
  )
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {name,email, id};
    setUsers([...users, newUser]);
    await postUsers(users);
  };

  const handleDeleteUser = (deleteUser) => {
    const deleteUsers = users.filter((user) => user.id !== deleteUser);
    console.log(deleteUsers);
    setUsers(deleteUsers);
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
      value={id}
      onChange={(e) => setId(e.target.value)}
      />
    </fieldset>
    
    {/* Add more form fields here */}
    
    <input type="submit" value="Add"  />
  </form>
</div>
 <DeleteUser handleDeleteUser={handleDeleteUser} />
</section>
)


}

export default Users


