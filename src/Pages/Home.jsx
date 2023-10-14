import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div onClick={() => console.log(ENV)}>hello world</div>
    </>
  );
};

export default Home;
