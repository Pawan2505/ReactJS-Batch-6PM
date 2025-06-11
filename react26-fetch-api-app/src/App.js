import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then((respose)=>respose.json())
    .then((data)=>setUsers(data))
    .catch((err)=>console.log(err))
  })
  return (
    <div>
      <h1>Users Details</h1>

      {
        users.map((user)=>(
          <ul key={user.id}>
            <li>{user.title}</li>
            <li>{user.description}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default App
