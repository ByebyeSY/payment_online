"use client";

import { FC } from "react";

const Home: FC = () => {
  const hello = async () => {
    const res = await fetch("/api");
    res.json().then((v) => console.log(v));

    return res;
  };

  return <button onClick={hello}>click me!</button>;
};

export default Home;
