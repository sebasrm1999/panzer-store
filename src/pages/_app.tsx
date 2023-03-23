import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY_PUBLIC}`);

function App({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripe}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Elements>
  );
}

export default App;
