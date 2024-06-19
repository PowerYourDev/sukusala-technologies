import React from "react";
import { useNavigate } from "react-router-dom";

import LoginConfig from "../../JsonConfig/LoginConfig.json";
import { renderComponentBasedOntype } from "../../Utilis";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/homepage");
  };
  return (
    <div className="flex justify-center items-center  flex-col h-screen gap-1 w-full">
      <h1 className="font-semibold text-lg">SIGN IN</h1>

      <div className="md:w-[70%] lg:w-[40%]   flex flex-col w-[90%]">
        {LoginConfig?.loginPage?.components.map((component, index) =>
      (
        <React.Fragment key={index}>
          {renderComponentBasedOntype(component, handleSubmit)}
        </React.Fragment>
      )
        )}
      </div>
    </div>
  );
};

export default SignIn;
