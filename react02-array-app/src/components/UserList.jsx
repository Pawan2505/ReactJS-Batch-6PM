import React from "react";

function UserList() {
  const arr = [12, 34, 56];
  const [x, y, z] = arr;
    return (
        <div>
            <h1>x : {x}</h1>
            <h1>y : {y}</h1>
            <h1>z : {z}</h1>
        </div>
    );
}

export default UserList;
