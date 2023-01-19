import { Footer, Header, Contact } from "../../components";
import { CiLocationOn } from "react-icons/ci";
import { hotelsDetailImgArr } from "../../constant";
import "./Hotels.scss";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const Hotels = () => {
  const [openImg, setOpenImg] = useState()
const [indexImg, setindexImg] = useState(1)

const handleRightClickImg = ()=>{
    if(indexImg<5){
      setindexImg(indexImg + 1)
      console.log(indexImg);
    }
    else{
      setindexImg(0)
      console.log(indexImg);
    }
}
const handleLeftClickImg =() => {
  if(indexImg ===0){
    setindexImg(5)
    console.log(indexImg);
  }
  else {
    setindexImg( indexImg -1)
    console.log(indexImg);
  }
}
  return (
    <>
      <Header type={"hotelList"} />
      <div className="hotelsPage">
        <div className="hotelsPage__desc">
          <div>
            <h2>Grand Hotel</h2>
            <span>
              <CiLocationOn /> Elton St 125 New York
            </span>
            <span>Excellent location - 500m from center</span>
            <span>
              Book a stay $114 at this property and get a free airport taxi
            </span>
          </div>

          <button className="hotelsPage__desc--btn">Reserve or Book Now</button>
        </div>

        <div className="hotelsPage__imgContainer">
          {hotelsDetailImgArr.map((imgSrc, index) => (
            <div
              onClick={() => setOpenImg((prev) => !prev)}
              key={index}
              className="hotelsPage__imgContainer--imgBox"
            >
              <img
              onClick={() => setindexImg(index)}
              src={imgSrc.imgSrc} alt="" />
            </div>
          ))}
        </div>

        <div
          onClick={() => setOpenImg(() => false)}
          className={`hotelsPages__caroussel ${!openImg && "none"}`}
        >
          <img
            onClick={(e) => e.stopPropagation()}
            src={hotelsDetailImgArr[indexImg]?.imgSrc}
            alt=""
          />

<div  className=" hotelsPages__caroussel--arrow">
          <FaArrowAltCircleLeft 
             onClick={(e) => {
              e.stopPropagation()
              handleLeftClickImg()
            }}
          className="leftArrow"/>
          <FaArrowAltCircleRight 
           onClick={(e) => {
            e.stopPropagation()
            handleRightClickImg()
          }
          }
          className="rightArrow"/>
        </div>
        </div>

       
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Hotels;
