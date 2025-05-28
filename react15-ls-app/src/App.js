import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const saveData = () => {
    let username = JSON.parse(localStorage.getItem("user"));
    username.push(name);

    localStorage.setItem("user", JSON.stringify(username));
    alert(`${name} Added in local storage!`);
    setName("");
  };

  const viewData = () => {
    let getdata = localStorage.getItem("user");
    alert(`${getdata} get data from local Storage!`);
    setName(getdata);
  };

  const deleteData = () => {
    let getdata = localStorage.getItem("user");

    localStorage.removeItem("user");

    alert(`${getdata} deleted from local storage!`);

    setName("");
  };

  const clearData = () => {
    localStorage.clear();
    alert("All data clear from local storage!");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={saveData}>Save</button>
      <button onClick={viewData}>View</button>
      <button onClick={deleteData}>Delete</button>
      <button onClick={clearData}>Clear</button>

      <br />
      <br />

      <p>{name}</p>
    </>
  );
};

export default App;
