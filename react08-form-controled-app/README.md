### **React Form Handling with Different Techniques**

---

#### **1. Understanding Uncontrolled vs Controlled Components**

* **Uncontrolled Component**:

  * The form input data resides directly in the **DOM** and not in React's state.
  * We don’t use `value` or `onChange` to bind form data with state.
  * We typically use **ref** to access the form values directly from the DOM.

  **Example**:

  * You **don't** need to handle input changes manually. Instead, you can use a reference to get the value when needed.

* **Controlled Component**:

  * The form input data is controlled by React state.
  * **Every input field** has a corresponding state value, and **state updates** occur with `onChange` handlers.

  **Example**:

  * Use `value={inputValue}` and `onChange={e => setInputValue(e.target.value)}` to bind the input field's value to the React state and update it on changes.

---

#### **2. Simple Form Handling using React's `useState` (Controlled Component)**

In this example, we will create a form where React manages the form data using **`useState`**.

```javascript
import React, { useState } from 'react';

const FormApp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

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
        <input 
          type="email" 
          value={email} 
          placeholder='Enter Email...' 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormApp;
```

**Explanation**:

* **useState** is used to create state variables for the username and email.
* **handleSubmit**: This function handles the form submission, logging the data to the console.
* **Input Fields**: Each input field's value is controlled by its corresponding state. The `onChange` event handler updates the state when the user types.

---

#### **3. Handling Multiple Form Inputs with One `useState` (Controlled Component)**

In cases where we want to handle multiple inputs in a single state object, here’s how we can do it:

```javascript
import React, { useState } from 'react';

const FormMultiple = () => {
  const [data, setData] = useState({ username: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={data.username}
        placeholder="Enter Username..."
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="Enter Email..."
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormMultiple;
```

**Explanation**:

* **Single `useState` for multiple inputs**: The form data is stored in a single object (`data`), with `username` and `email` as its keys.
* **Dynamic change handling**: The `handleChange` function updates the specific field in the object dynamically using the `name` attribute of the input.

---

#### **4. Form Handling with React Hook Form**

If we want more advanced form handling with validation, auto-fill, and easy reset functionality, we can use **React Hook Form**.

```javascript
import React from "react";
import { useForm } from "react-hook-form";

const FormUsingFormHook = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Username: ${data.username}  Email: ${data.email}  Gender: ${data.gender}`);
  };

  const fillDemoData = () => {
    setValue("username", "Rahul");
    setValue("email", "rahul@example.com");
    setValue("gender", "male");
  };

  const clearForm = () => {
    reset(); // Clears all form fields
  };

  return (
    <div>
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: "Enter Username" })}
          placeholder="Enter Username"
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          {...register("email", { required: "Enter Email" })}
          placeholder="Enter Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <select {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <button type="submit">Submit</button>
        <button type="button" onClick={fillDemoData}>Auto-Fill</button>
        <button type="button" onClick={clearForm}>Reset</button>
      </form>
    </div>
  );
};

export default FormUsingFormHook;
```

**Explanation**:

* **React Hook Form** is used for easier form validation and management.
* **register**: Registers form fields for easy access and validation.
* **setValue**: Used to auto-fill the form with demo data.
* **reset**: Clears all the form fields.

---

### **Video Explanation:**

For a more detailed explanation, check out this [Video Tutorial](https://drive.google.com/file/d/12m3gJLyZXcB1cqJ3-_jk1bKdwQ5diBDJ/view?usp=sharing).


### Here’s the video link for the Uncontrolled Component:

[Uncontrolled Component Video](https://drive.google.com/file/d/1GSgpGGUDL2RBrlCo3SCkUNbcut53WYql/view?usp=sharing)


