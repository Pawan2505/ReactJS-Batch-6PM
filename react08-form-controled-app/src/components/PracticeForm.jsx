import React, { useState } from 'react'

const PracticeForm = () => {

    const [data, setData] = useState({username:'',email:''})

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username : ${data.username} Email : ${data.email}`);

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setData((prevData) => (
            {...prevData,[name]:value}
        ))

    }
  return (
    <form onSubmit={handleSubmit} >
          <input type="text" name='username' value={data.username} onChange={handleChange} placeholder='Enter UserName' />
          <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='Enter Email' />
          <button type='submit'>Submit</button>
   </form>
  )
}

export default PracticeForm