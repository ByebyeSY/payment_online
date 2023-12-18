"use client";

import customFetch from "@/hooks/customFetch";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IProductForm {
  name: string;
  description: string;
  price: number;
  count: number;
}

const ProductForm: FC = () => {
  const { register, handleSubmit } = useForm<IProductForm>();

  const onSubmit: SubmitHandler<IProductForm> = (e) => {
    customFetch("/api/product", "POST", { body: JSON.stringify(e) }).then((v) =>
      console.log(v)
    );
  };

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="w-[32%] h-full flex flex-col p-8 gap-6 justify-center pt-20"
      >
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            className="focus-visible:outline-none h-12 rounded-md border-2 px-2 py-1"
            {...register("name")}
          />
        </div>
        <div className="flex w-full gap-8">
          <div className="flex flex-col gap-2 w-[64%]">
            <label>Price</label>
            <input
              type="number"
              className="focus-visible:outline-none h-12 rounded-md border-2 px-2 py-1"
              {...register("price")}
            />
          </div>
          <div className="flex flex-col gap-2 w-[32%]">
            <label>Count</label>
            <input
              type="number"
              className="focus-visible:outline-none h-12 rounded-md border-2 px-2 py-1"
              {...register("count")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={5}
            cols={40}
            className="focus-visible:outline-none rounded-md border-2 px-2 py-1 resize-none"
            {...register("description")}
          />
        </div>
        <input
          className="w-[320px] h-[56px] bg-[#468B31] text-[#fafafa] rounded-md cursor-pointer font-semibold"
          type="submit"
          value="Create Product"
        />
      </form>
    </div>
  );
};

export default ProductForm;
