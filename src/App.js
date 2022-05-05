import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";

import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
// "pk_test_345u23049u52934y529834y592834y59823y4598234y52034y58729hapudvbap9r9aerpuvdfjnvpew9fupdvadgnuiebaksdfa"
// );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in or was already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                {/* <Elements stripe={promise}> */}
                <Payment />
                {/* </Elements> */}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
