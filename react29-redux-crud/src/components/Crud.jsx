import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../redux/Action";

const Crud = () => {
  const [username, setUsername] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      dispatch(updateUser(editId, { username }));
      setEditId(null);
    } else {
      dispatch(addUser({ username }));
    }

    setUsername("");
  };

  const handleEdit = (user) => {
    setUsername(user.username);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: "300px", margin: "20px auto" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          {editId ? "Update User" : "Add User"}
        </button>
      </form>

      <table border="1" style={{ width: "80%", margin: "auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>
                <button onClick={() => handleEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)} style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
