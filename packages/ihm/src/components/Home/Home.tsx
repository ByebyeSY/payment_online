"use client";

import { FC, useState } from "react";

const Home: FC = () => {
  const [title, setTitle] = useState<string>("");

  const hello = async () => {
    const res = await fetch("/api");
    res.json().then((v) => setTitle(v));

    return res;
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={hello}>click me!</button>;
    </div>
  );
};

export default Home;
