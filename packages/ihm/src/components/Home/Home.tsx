"use client";

import customFetch from "@/hooks/customFetch";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import Image from "next/image";
import { FC, useEffect, useMemo, useState } from "react";
import zoroImage from "../../../public/image/figurine-zoro.jpg";
import masterCardLogo from "../../../public/logo/MasterCard.png";
import payPalLogo from "../../../public/logo/Paypal.png";
import visaLogo from "../../../public/logo/visa.png";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const appearance: Appearance = {
  theme: "stripe",
};

const PAYMENT_LOGO = [visaLogo, masterCardLogo, payPalLogo];

const Home: FC = () => {
  const [clientSecret, setClientSecret] = useState("");

  const options: StripeElementsOptions = useMemo(
    () => ({
      clientSecret,
      appearance,
    }),
    [clientSecret, appearance]
  );

  useEffect(() => {
    customFetch("/api/product/pay", "POST").then((v) => setClientSecret(v));
  }, []);

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
          {PAYMENT_LOGO.map((logo) => (
            <Image
              key={logo.src}
              alt="logo-visa"
              src={logo}
              className="w-[20%] object-contain"
            />
          ))}
        </div>
        <div className="w-full h-[84%] p-16 bg-white">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
