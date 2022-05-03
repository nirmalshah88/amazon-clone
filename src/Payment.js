import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import uniqid from "uniqid";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{!user ? "Guest" : user.email.match(/^([^@]*)@/)[1]}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
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
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <h3>Payment method</h3>
          <div className="payment__details">
            {/* Stripe magic will go here! */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
