"use client";

import { FC, useState } from "react";

const Home: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [register, setRegister] = useState<String>("");

  const hello = async () => {
    const res = await fetch("/api");
    res.json().then((v) => setTitle(v));
  };

  const registerFn = async () => {
    const res = await fetch("/api", { method: "POST" });
    res.json().then((v) => setRegister(v));
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={hello}>click me!</button>
      <h1>{register}</h1>
      <button onClick={registerFn}>Click here to register!</button>
    </div>
  );
};

export default Home;
