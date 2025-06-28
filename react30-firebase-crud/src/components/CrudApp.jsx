import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase";

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });
  const [editId, setEditId] = useState(null);

  const allRecord = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let obj = { ...doc.data(), ["id"]: doc.id };
      newArray.push(obj);
    });
    setUsers(newArray);
  };

  useEffect(() => {
    allRecord();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);

    if (editId != null) {
      await updateDoc(doc(db, "employees", editId), newUser);
      setEditId(null);
    } else {
      await addDoc(collection(db, "employees"), newUser);
    }
    setNewUser({ name: "", age: "" });
    allRecord();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "employees", id));
    allRecord();
  };

  const editData = (id) => {
    let singleRecord = users.find((u) => u.id == id);
    setNewUser(singleRecord);
    setEditId(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 shadow mt-5 m-auto w-50">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Enter Username..."
        />
        <input
          className="form-control mb-3"
          type="number"
          name="age"
          value={newUser.age}
          onChange={handleChange}
          placeholder="Enter age..."
        />
        <button className="btn btn-primary w-100" type="submit">
          Save
        </button>
      </form>

      <table className="table table-striped table-hover w-50 mt-5 m-auto table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => deleteData(item.id)}>Delete</button>
                <button onClick={() => editData(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CrudApp;
