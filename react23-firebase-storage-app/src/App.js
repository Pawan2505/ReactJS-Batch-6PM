import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    let allData = async () => {
      const allRecords = await getDocs(collection(db, "employees"));

      let newArray = [];
      allRecords.forEach((doc) => {
        // console.log(doc.id, doc.data())
        let obj = { ...doc.data(), ["id"]: doc.id };
        newArray.push(obj);
      });

      setEmp(newArray);
    };
    allData();
  }, [emp]);
  return (
    <div>
      <h1>Firebase...</h1>

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
          {emp.map((v, i) => {
           return(
             <tr key={i}>
              <td>{i+1}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
              <td>Action</td>
            </tr>
           )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
