import { Header } from "../../components";
import { CiLocationOn } from "react-icons/ci";
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
              <CiLocationOn /> {""} Elton St 125 New York{" "}
            </span>
            <span>Excellent location - 500m from center</span>
            <span>
              Book a stay $114 at this property and get a free airport taxi
            </span>
          </div>

          <button className="hotelsPage__desc--btn">Reserve or Book Now</button>
        </div>

        <div className="hotelsPage__imgContainer">
          <div className="hotelsPage__imgContainer--imgBox">
            <img
              src="https://images.unsplash.com/photo-1659884700210-5d00b9656511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1117&q=80"
              alt=""
            />
          </div>{" "}

        </div>
      </div>
    </>
  );
};

export default Hotels;
