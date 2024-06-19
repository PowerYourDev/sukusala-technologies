import React from "react";

import HomeConfig from "../../JsonConfig/HomeConfig.json";
import { renderComponentBasedOntype } from "../../Utilis";
import { NetflixAppAnotherreactApp } from "../../constant";

const Home = () => {
  const handleSubmit = () => [(window.location.href = NetflixAppAnotherreactApp)];

  return (
    <div className="bg-[green] w-full text-white flex justify-center items-center flex-col h-screen">
       <div className="w-auto">
       <h1 className="mb-2 text-center">Home Page</h1>
      {HomeConfig?.HomePage?.components?.map((component, index) =>
        renderComponentBasedOntype(component, handleSubmit)
      )}
       </div>
    </div>
  );
};

export default Home;
