"use client";

import customFetch from "@/hooks/customFetch";
import { FC, useState } from "react";
import toast from "react-hot-toast";

const Home: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [register, setRegister] = useState<String>("");

  const hello = async () => {
    const res = await fetch("/api");
    toast.error("nope");
  };

  const registerFn = async () => {
    const res = customFetch("/api", "POST");
    setRegister(res as any);
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
