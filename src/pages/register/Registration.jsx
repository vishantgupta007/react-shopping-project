import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./register.css";

export const Registration = () => {
  // => calling useState to that we can fill the values of our own using setValues

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  // localy creating data so that we can render our our inputs with the functionality of adding inputs

  // using Regex so that we can enter the required user-name and and displaying the error if the field is not filled with the required requirements as provided in the inputs data

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

//  using handleInput to stop the form from refreshing 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

// onChange method so that we can enter the fields without changing the previus one

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              // passing then as props to formInput component
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
            />
          );
        })}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
