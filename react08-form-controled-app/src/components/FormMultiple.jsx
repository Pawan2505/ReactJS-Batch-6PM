import React, { useState } from 'react'

const FormMultiple = () => {

    const [data, setData] = useState({username:'', email:''})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setData((prevData) => (
            {...prevData,[name]:value}
        ))

    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={data.username}
        placeholder="Enter UserName..."
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="Enter Email..."
        onChange={handleChange}
          />
          
          <button type='submit'>Submit</button>
    </form>
  );
}

export default FormMultiple