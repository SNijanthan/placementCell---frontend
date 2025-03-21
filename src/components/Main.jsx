import React from "react";
import Students from "./Students";
import Interview from "./Interview";

const Main = () => {
  return (
    <div className="w-5/6 m-auto flex items-center justify-around">
      <Students />
      <Interview />
    </div>
  );
};

export default Main;
