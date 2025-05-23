import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editId, setEditId] = useState(null);

  async function show() {
    let response = await axios.get("http://localhost:3000/user");

    let result =await response.data;
    setUsers(result);

    console.log(result);
  }

  useEffect(() => {
    show();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      axios.put(`http://localhost:3000/user/${editId}`, { name: newUser });
      setNewUser('');
      setEditId(null);
      show();
    } else {
      axios.post("http://localhost:3000/user", { name: newUser });
      setNewUser('');
      show();
    }
    show();
  };

function editDetails(userId) {
  let editData = users.find((u) => u.id === userId)
  setNewUser(editData.name);
  setEditId(userId);

  }
  async function deleteDetails(userId) {
    await axios.delete(`http://localhost:3000/user/${userId}`);
    show();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username..."
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button>Save</button>
      </form>

      <table>
        <thead>
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
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => editDetails(user.id)}>Edit</button>
                  <button onClick={() => deleteDetails(user.id)}>Delete</button>
                </td>
              </tr>
            );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default App;
