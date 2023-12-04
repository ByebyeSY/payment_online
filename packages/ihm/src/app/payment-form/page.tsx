"use client";

import CheckoutForm from "@/components/CheckoutForm";
import customFetch from "@/hooks/customFetch";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe("pk_test_oKhSR5nslBRnBZpjO6KuzZeX");

const PaymentForm = () => {
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
    <div className="w-full h-[980px] bg-white">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentForm;
