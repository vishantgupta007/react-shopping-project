import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  // destructuring the props coming from parent component and passing the specific props
  const { label, errorMessage, onChange, ...input } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        // when the user leaves the input
        onBlur={handleFocus}
        // when the user clicks the input the focus gets triggered
        // onFocus={() => input.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="msg">{errorMessage}</span>
    </div>
      // displaying error message it the field is empty or met the requirements;
  );
};

export default FormInput;
