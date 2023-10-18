import React, { useEffect } from "react";
import Protect from "../Components/Auth/ProtectComp";
const Home = () => {
  return (
    <>
      <Protect>
        <div onClick={() => console.log(ENV)}>hello world</div>
      </Protect>
    </>
  );
};

export default Home;
