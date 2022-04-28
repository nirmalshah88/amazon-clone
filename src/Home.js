import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="237549"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="932867"
            title="Kenwood kMix Stand Mixer"
            price={239.0}
            image="https://m.media-amazon.com/images/I/71x9OnEwQgS._AC_SX425_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="9845643"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={299.0}
            image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX355_.jpg"
            rating={5}
          />
          <Product
            id="4957862"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://m.media-amazon.com/images/I/6146o3W9maL._AC_SY355_.jpg"
            rating={5}
          />
          <Product
            id="9834524"
            title="2020 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Silver"
            price={589.99}
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX466_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="129357"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1099.0}
            image="https://m.media-amazon.com/images/I/81Butfqtj5L._AC_SX425_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
