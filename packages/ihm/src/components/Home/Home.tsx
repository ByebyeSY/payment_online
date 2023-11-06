"use client";

import { getHello } from "@/api";
import { FC, useMemo } from "react";

const Home: FC = () => {
  const hello = useMemo(() => getHello(), []);
  return <p>{hello}</p>;
};

export default Home;
