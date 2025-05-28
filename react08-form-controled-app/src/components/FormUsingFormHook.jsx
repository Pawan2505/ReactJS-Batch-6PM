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

  // Form Submit
  const onSubmit = (data) => {
    alert(
      `Username : ${data.username}  Email : ${data.email}  Gender : ${data.gender}`
    );
  };

  // Auto-fill values using setValue()
  const fillDemoData = () => {
    setValue("username", "Rahul");
    setValue("email", "rahul@example.com");
    setValue("gender", "male");
  };

  // Reset form values
  const clearForm = () => {
    reset(); // all fields will be cleared
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

        <br />
        <br />

        <button type="submit">Submit</button>
        <button type="button" onClick={fillDemoData}>
          Auto-Fill
        </button>
        <button type="button" onClick={clearForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormUsingFormHook;
