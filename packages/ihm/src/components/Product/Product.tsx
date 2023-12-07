import { FC } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const Product: FC = () => {
  return (
    <div>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Product;
