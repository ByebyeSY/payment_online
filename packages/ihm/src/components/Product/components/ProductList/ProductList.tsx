"use client";

import customFetch from "@/hooks/customFetch";
import { FC, useEffect } from "react";

const ProductList: FC = () => {
  useEffect(() => {
    customFetch("/api/product", "GET").then((v) => console.log(v));
  }, []);

  return <div>Product list</div>;
};

export default ProductList;
