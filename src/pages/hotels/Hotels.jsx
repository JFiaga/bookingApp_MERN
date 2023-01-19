import { Footer, Header, Contact } from "../../components";
import { CiLocationOn } from "react-icons/ci";
import { hotelsDetailImgArr } from "../../constant";
import "./Hotels.scss";


const Hotels = () => {
  return (
    <>
      <Header type={"hotelList"} />
      <div className="hotelsPage">
        <div className="hotelsPage__desc">
          <div>
            <h2>Grand Hotel</h2>
            <span>
              <CiLocationOn />  Elton St 125 New York

            </span>
            <span>Excellent location - 500m from center</span>
            <span>
              Book a stay $114 at this property and get a free airport taxi
            </span>
          </div>

          <button className="hotelsPage__desc--btn">Reserve or Book Now</button>
        </div>

        <div className="hotelsPage__imgContainer">
        {hotelsDetailImgArr.map((imgSrc, index)=> (

          <div
          key={index}
          className="hotelsPage__imgContainer--imgBox">
            <img
              src={imgSrc.imgSrc}
              alt=""
              />
          </div>
              ))}
        </div>
      </div>

        <Contact/>
        <Footer/>
    </>
  );
};

export default Hotels;
