import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div onClick={() => console.log(Env.KEY)}>hello world</div>
    </>
  );
};

export default Home;
