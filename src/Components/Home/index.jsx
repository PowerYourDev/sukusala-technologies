import React from "react";

import HomeConfig from "../../JsonConfig/HomeConfig.json";
import { renderComponentBasedOntype } from "../../Utilis";
import { githubURL } from "../../constant";

const Home = () => {
  const handleSubmit = () => [(window.location.href = githubURL)];

  return (
    <div className="bg-[green] w-full text-white flex justify-center items-center flex-col h-screen">
      <h1 className="mb-2">Home Page</h1>
      {HomeConfig?.HomePage?.components?.map((component, index) =>
        renderComponentBasedOntype(component, handleSubmit)
      )}
    </div>
  );
};

export default Home;
