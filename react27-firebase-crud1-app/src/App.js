import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {collection, getDocs, doc, deleteDoc, addDoc, getDoc, updateDoc} from "firebase/firestore";

const App = () => {
  const [emp, setEmp] = useState([]);
  const [employee, setEmployee] = useState({ name: "", age: "" });
  const [editId, setEditId] = useState(null);

  // Fetch all data
  const allData = async () => {
    const allRecords = await getDocs(collection(db, "employees"));
    let newArray = [];
    allRecords.forEach((docSnap) => {
      let obj = { ...docSnap.data(), id: docSnap.id };
      newArray.push(obj);
    });
    setEmp(newArray);
  };

  useEffect(() => {
    allData();
  }, []);

  // Delete a record
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "employees", id));
    await allData();
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employee);

    if (editId) {
      // Update existing record
      await updateDoc(doc(db, "employees", editId), employee);
      setEditId(null);
    } else {
      // Add new record
      await addDoc(collection(db, "employees"), employee);
    }

    setEmployee({ name: "", age: "" });
    await allData();
  };

  // Input change handler
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  // Load data into form for editing
  const editData = async (id) => {
    const docRef = doc(db, "employees", id);
    const singleEmployee = await getDoc(docRef);
    setEmployee(singleEmployee.data());
    setEditId(id);
  };

  return (
    <div>
      <h1>CRUD - firebase</h1>

      <form method="post" onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <label>Enter Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Enter Age</label>
              </td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={employee.age}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">{editId ? "Update" : "Submit"}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <h2>Employee List</h2>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((v, i) => (
            <tr key={v.id}>
              <td>{i + 1}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>
                <button onClick={() => deleteData(v.id)}>Delete</button>{" "}
                <button onClick={() => editData(v.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
