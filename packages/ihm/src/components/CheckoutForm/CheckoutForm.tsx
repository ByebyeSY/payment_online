"use client";

import {
  PAYMENT_INTENT_CLIENT_SECRET,
  PAYMENT_INTENT_STATUS,
  PAYMENT_RETURN_URL,
  STRIPE_ERROR,
} from "@/constant/stripe";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  Stripe,
  StripeElements,
  StripePaymentElementOptions,
} from "@stripe/stripe-js";
import { FC, FormEventHandler, useEffect, useState } from "react";

const paymentElementOptions: StripePaymentElementOptions = {
  layout: "tabs",
};

const CheckoutForm: FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const stripe: Stripe = useStripe() as Stripe;
  const elements: StripeElements = useElements() as StripeElements;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: PAYMENT_RETURN_URL,
        receipt_email: email,
      },
    });

    if (
      error.type === STRIPE_ERROR.cardError ||
      error.type === STRIPE_ERROR.validationError
    ) {
      setMessage(error.message ?? "");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      PAYMENT_INTENT_CLIENT_SECRET
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case PAYMENT_INTENT_STATUS.succeeded:
          setMessage("Payment succeeded!");
          break;
        case PAYMENT_INTENT_STATUS.processing:
          setMessage("Your payment is processing.");
          break;
        case PAYMENT_INTENT_STATUS.requiresPaymentMethod:
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-[320px] mt-8 h-[56px] bg-[#468B31] text-[#fafafa] rounded-md cursor-pointer font-semibold"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
