import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import axios from "./axios";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import uniqid from "uniqid";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  //   const history = useHistory();

  //   const stripe = useStripe();
  //   const elements = useElements();

  //   const [succeeded, setSucceeded] = useState(false);
  //   const [processing, setProcessing] = useState("")
  //   const [error, setError] = useState(null);
  //   const [disabled, setDisabled] = useState(true);
  //   const [clientSecret, setClientSecret] = useState(true);

  //   useEffect(() => {
  //     // generate the special stripe secret which allows us to charge a customer
  //     // but we need a new secret each time there's a change in the basket
  //     const getClientSecret = async () => {
  //       const response = await axios({
  //         method: "post",
  //         // Stripe expects the total in a currency's subunits (i.e. if US $, then cents)
  //         url: `payments/create?total=${getBasketTotal(basket) * 100}`,
  //       });
  //       setClientSecret(response.data.clientSecret);
  //     };

  //     getClientSecret();
  //   }, basket);

  //   const handleSubmit = (e) => {
  //     // do all the fancy Stripe stuff....
  //     e.preventDefault;
  //     setProcessing(true);

  //       const payload = await stripe.confirmCardPayment(clientSecret, {
  //           payment_method: {
  //               card: elements.getElement(CardElement)
  //           }
  //       }).then(({paymentIntent}) => {
  //           // paymentIntent = payment confirmation
  //           setSucceeded(true);
  //           setError(null);
  //           setProcessing(false);

  //           history.replace('/orders');
  //       })
  //   };

  //   const handleChange = (e) => {
  // Listen for changes in the CardElement
  // and display any errors as the customer types their card details
  // setDisabled(e.empty);
  // setError(e.error ? e.error.message : "");
  //   };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{!user ? "Guest" : user.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={uniqid()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <h3>Payment method</h3>
          <div className="payment__details">
            {/* Stripe magic will go here! */}
            {/* <form onSubmit={handleSubmit}> */}
            {/* <CardElement onChange={handleChange} /> */}
            <div className="payment__priceContainer">
              <p>Order Total: {getBasketTotal(basket)}</p>
            </div>
            {/* </form> */}
            {/* <button disabled={processing || disabled || succeeded}> */}
            {/* <span>{processing ? <p>Processing</p> : "Buy Now"}</span> */}
            {/* </button> */}
          </div>
          {/* Errors */}
          {/* {error && <div>{error}</div>} */}
        </div>
      </div>
    </div>
  );
}

export default Payment;
