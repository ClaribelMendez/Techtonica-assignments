
import  React, { useState } from 'react'



const DeleteUser = (props) => {


const [ deleteUser, deleteId] = useState('');


return (
<div>
  <h3>Delete User</h3>
  <form id="delete-user" action="#"   onSubmit={(ev) => {
            ev.preventDefault();
            props.handleDeleteUser(deleteUser);
            deleteId("");
          }}>
    <fieldset>
      <label>User ID</label>
      <input type="text" id="delete-user-id" 
              value={deleteUser}
              onChange={(e) => deleteId(e.target.value)}

      />
    </fieldset>
    <input type="submit" />
  </form>
</div>
)
   }


export default DeleteUser;




