import React from "react";
import './Featured.scss'
import { featuredDataArr } from "../../constant";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__cardContainer">
        {featuredDataArr.map((feature, index) => (
          <div key={index} className='featured__cardContainer--card'>
            <img src={feature.imgLink} alt="" />
            <div className="featured__cardContainer--desc">
                <span>{feature.city}</span>
                <span>{feature.property}</span>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
