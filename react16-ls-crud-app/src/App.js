import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]); 
  const [newUser, setNewUser] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("user"));
    if (getData) {
      setUsers(getData);
      console.log(getData);
    }
   
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      let editedArray = [...users];
      editedArray[editIndex] = newUser;
      localStorage.setItem('user', JSON.stringify(editedArray));
      setUsers(editedArray);
      setEditIndex(null);
      setNewUser("");
      
    } else {
      let addedData = [...users, newUser];
      setUsers(addedData);
      localStorage.setItem('user', JSON.stringify(addedData));
      setNewUser('');
    }

  }

  const editDetails = (index) => {
    let updated = users[index];
    setNewUser(updated);
    setEditIndex(index);
  }

  const deleteDetails = (index) => {
    let updatedData = users.filter((_, i) => i !== index)
    setUsers(updatedData);
    localStorage.setItem("user", JSON.stringify(updatedData));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='form-control m-2' type="text" placeholder="Enter Username..." value={newUser} onChange={(e)=>setNewUser(e.target.value)} />
        <button className='btn btn-primary text-white w-100 m-2' type='submit'>Save</button>
      </form>

      <table className='table table-striped'>
        <thead className='table-dark text-white'>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user}</td>
                  <td>
                    <button onClick={()=>editDetails(index)}>Edit</button>
                    <button onClick={()=>deleteDetails(index)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App