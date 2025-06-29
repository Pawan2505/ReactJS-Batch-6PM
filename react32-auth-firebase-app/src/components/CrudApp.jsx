import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("User is signed out");
      navigate("/");
    }
  });

  const allRecord = async () => {
    const querySnapshot = await getDocs(collection(db, "employees"));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
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

  const deleteRecord = async (id) => {
    await deleteDoc(doc(db, "employees", id));
    allRecord();
  };

  const editRecord = (id) => {
    let singleRecord = users.find((u) => u.id === id);
    setNewUser(singleRecord);
    setEditId(id);
  };

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1>This is CrudApp Page</h1>
      <button className="btn btn-danger -2 m-2" onClick={() => logOutUser()}>
        LogOut
      </button>
      <form onSubmit={handleSubmit} className="p-5 w-50 mt-5 m-auto shadow">
        <input
          className="form-control w-100 mb-4"
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Enter username..."
        />
        <input
          className="form-control w-100 mb-4"
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

      <table className="w-50 mt-5 m-auto table table-striped table-hover table-bordered">
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
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deleteRecord(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => editRecord(item.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
