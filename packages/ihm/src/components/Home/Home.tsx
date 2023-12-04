"use client";

import customFetch from "@/hooks/customFetch";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import zoroImage from "../../../public/image/figurine-zoro.jpg";
import masterCardLogo from "../../../public/logo/MasterCard.png";
import payPalLogo from "../../../public/logo/Paypal.png";
import visaLogo from "../../../public/logo/visa.png";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";

interface IDataForm {
  cardName: string;
  cardNumber: string;
  cvv: number;
  expireDate: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const Home: FC = () => {
  const { register, setValue, handleSubmit } = useForm<IDataForm>();

  const hello = async () => {
    const res = await fetch("/api");
  };

  const registerFn = () => {
    const res = customFetch("/api", "POST");
  };

  const createProduct = () => {
    const res = customFetch("/api/product", "POST");
  };

  const onSubmit: SubmitHandler<IDataForm> = (e) => console.log(e);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const res = customFetch("/api/product/pay", "POST").then((v) =>
      setClientSecret(v)
    );
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="w-[1024px] bg-[#fafafa] bg-opacity-80 h-[720px] flex text-[#0a0a0a]">
      <div className="relative h-full w-[48%] flex items-center bg-[#468B31]">
        <Image src={zoroImage} alt="zoro-image" />
        <div className="absolute bottom-0 w-full h-[120px] backdrop-blur-md text-white  flex flex-col justify-center items-center">
          <span className="text-2xl font-semibold">TOTAL</span>
          <span className="text-2xl font-semibold">500 €</span>
        </div>
      </div>
      <div className="w-[52%] h-full">
        <div className="relative w-full h-[16%] flex justify-evenly items-center">
          <Image
            alt="logo-visa"
            src={visaLogo}
            className="w-[20%] object-contain"
          />
          {/* <Image
            alt="logo-stripe"
            src={stripeLogo}
            className="w-[20%] object-contain"
          /> */}
          <Image
            alt="logo-master-card"
            src={masterCardLogo}
            className="w-[20%] object-contain"
          />
          <Image
            alt="logo-paypal"
            src={payPalLogo}
            className="w-[20%] object-contain"
          />
        </div>
        <div className="w-full h-[84%] p-16 bg-white">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          {/* <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex flex-col p-8 gap-16 justify-center pt-20"
          >
            <div className="flex flex-col gap-2">
              <label>CARD HOLDERS NAME</label>
              <input
                type="text"
                className="focus-visible:outline-none border-b-2 pb-1"
                {...register("cardName")}
              />
            </div>
            <div className="flex w-full gap-8">
              <div className="flex flex-col gap-2 w-[56%]">
                <label>CARD NUMBER</label>
                <input
                  type="text"
                  className="focus-visible:outline-none border-b-2 pb-1"
                  placeholder="1234 4567 7894 7985"
                  {...register("cardNumber")}
                />
              </div>
              <div className="flex flex-col gap-2 w-[32%]">
                <label>CVV2</label>
                <input
                  className="focus-visible:outline-none border-b-2 pb-1"
                  {...register("cvv")}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>EXPIRE DATE</label>
              <input
                className="focus-visible:outline-none border-b-2 pb-1"
                {...register("expireDate")}
              />
            </div>
            <input
              className="w-[320px] m-auto h-[56px] bg-[#468B31] text-[#fafafa] rounded-md cursor-pointer font-semibold"
              type="submit"
              value="MAKE PAYMENT"
            />
          </form> */}
        </div>
      </div>

      {/* <input
        className="w-[320px] m-auto h-[56px] bg-[#468B31] text-[#fafafa] rounded-md cursor-pointer font-semibold"
        type="submit"
        value="MAKE PAYMENT"
        onClick={createProduct}
      /> */}
      {/* <h1>{title}</h1> */}
      {/* <button onClick={hello}>click me!</button> */}
      {/* <h1>{register}</h1> */}
      {/* <button onClick={registerFn}>Click here to register!</button> */}
    </div>
  );
};

export default Home;
