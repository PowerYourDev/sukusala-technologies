import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginConfig from "../../JsonConfig/LoginConfig.json";
import { renderComponentBasedOntype } from "../../Utilis";
import { validateField } from "../../Utilis";

const initialFormData = LoginConfig?.loginPage?.components.reduce(
  (acc, element) => {
    if (element.type === "textField" || element.type === "passwordField") {
      acc[element.id] = "";
    }
    return acc;
  },
  {}
);

const SignIn = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleValueChange = (e) => {
    const { id, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    LoginConfig?.loginPage?.components.forEach((component) => {
      if (component.validation) {
        const errorMessage = validateField(
          component.id,
          values[component.id],
          component.validation
        );
        if (errorMessage) {
          newErrors[component.id] = errorMessage;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/homepage");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-1 w-full">
      <h1 className="font-bold text-2xl ">SIGN IN</h1>
      <form
        className="md:w-[70%] lg:w-[40%] flex flex-col w-[90%]"
        onSubmit={handleSubmit}
      >
        {LoginConfig?.loginPage?.components.map((component, index) => (
          <React.Fragment key={index}>
            {renderComponentBasedOntype(
              component,
              handleSubmit,
              handleValueChange
            )}
            {errors[component.id] && (
              <p className="text-red-600 font-semibold">
                {errors[component.id]}
              </p>
            )}
          </React.Fragment>
        ))}
      </form>
    </div>
  );
};

export default SignIn;
