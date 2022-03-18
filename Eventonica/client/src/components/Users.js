import React, { useState, useEffect } from 'react'
import DeleteUser from './DeleteUser'
/*eslint consistent-return: "error"*/


const Users = () => {

  const [users, setUsers] = useState([]);

// console.log('users', users);

const getUsers = async () => {
  const response = await fetch('http://localhost:4000/users');
  const user = await response.json();
  setUsers(user);
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

const addUser = () => {
  const newUser = { id: id, name: name, email: email };
  fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      // body data type must match content-type
      // convert to a JSON string
      body: JSON.stringify(newUser),
  })
      // json() method of response returns a
      // promise which resolves with the result of
      // parsing the body text as JSON
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          // if success, do the following
          setUsers([...users, newUser])
          setName('');
          setId('');
          setEmail('');
      })
      .catch((error) => {
          console.error('Error:', error);
      });
}
  function handleSubmit(e) {
    e.preventDefault();
    // const newUser = { name, email, id };
    // setUsers([...users, newUser]);
    addUser();
  }

  // function handleDeleteUser(deleteUser) {
  //   const deleteUsers = users.filter((user) => user.id !== deleteUser);
  //   console.log(deleteUsers);
  //   setUsers(deleteUsers);
  // }

  const handleDeleteUser = (id) => {
    deleteUser(id);
};

const deleteUser = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // if success, do the following
            const newUsers = users.filter((i) => i.id !== id);
            setUsers(newUsers);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

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
  <form id="add-user" action="#" method = 'POST' onSubmit ={handleSubmit}>
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


