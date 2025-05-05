import React, { useState } from 'react'

const FormApp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);   
        console.log(email);   
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>  
        <input
          type="text"
          value={username}
          placeholder="Enter Username.."
          onChange={(e) => setUsername(e.target.value)}
              />

        <input type="email" value={email} placeholder='Enter Email...' onChange={(e)=> setEmail(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormApp