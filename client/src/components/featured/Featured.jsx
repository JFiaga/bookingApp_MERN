import React from "react";
import './Featured.scss'
import { featuredDataArr } from "../../constant";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

    const {data, loading, error} =useFetch("hotels/findHotel/countByCity?cities=madrid,tokyo,singapour") //We use the proxy in this section

    console.log(data)

  return (
    <div className="featured">
      <div className="featured__cardContainer">
        {loading ?  'Please wait' : <>
        {featuredDataArr.map((feature, index) => (
          <div key={index} className='featured__cardContainer--card'>
            <img src={feature.imgLink} alt="" />
            <div className="featured__cardContainer--desc">
                <span>{feature.city}</span>
                <span>{data[index]} Property</span>
            </div>
          </div>
        ))}</>}
      </div>
    </div>
  );
};

export default Featured;
