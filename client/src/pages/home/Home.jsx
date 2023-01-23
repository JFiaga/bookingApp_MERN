import React from "react";
import "./Home.scss";
import {
  Contact,
  Featured,
  FeaturedProperties,
  Footer,
  Header,
  PropertyList,
  ReservationData,
} from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
      <ReservationData/>
        <Featured />
        <PropertyList />
        <FeaturedProperties />
        <Contact />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
