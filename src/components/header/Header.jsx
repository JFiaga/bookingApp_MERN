import { useState } from "react";
import "./Header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaBed, FaCalendar, FaCar, FaFly, FaTaxi } from "react-icons/fa";
import {
  AiFillCloseCircle,
  AiFillTool,
  AiOutlineLineChart,
} from "react-icons/ai";

const Header = ({type}) => {
  const headerIconsValues = [
    { icon: FaBed, value: "stays" },
    { icon: FaFly, value: "flights" },
    { icon: FaCar, value: "car rentals" },
    { icon: AiOutlineLineChart, value: "attractions" },
    { icon: FaTaxi, value: "airport taxis" },
  ];

  const [calenderOn, setCalenderOn] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });
  const handleOptions = (name, operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operations === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [optionsOn, setOptionsOn] = useState(false);
  return (
    <header
    className="header"
    > 
      <div className="icons__container">
        {headerIconsValues.map((item, index) => (
          <div key={index} className="icons__container--box">
            {<item.icon />}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
      {type != 'hotelList' &&
      
     <>
      <h1 className="header__title">Find your next stay</h1>
      <h2 className="header__subtitle">
        Search deals on hotels, homes, and much more...
      </h2>
      <button className="header__btn">Sing in / Register</button>

      <div className="header__reservationBox">
        <div className="header__reservationBox--search">
          <FaBed />
          <input type="text" placeholder="Where are you going ?" />
        </div>
        <div className="header__reservationBox--calendar">
          <FaCalendar />

          <input
            value={`${format(date[0].startDate, "MM/dd/yy")} - ${format(
              date[0].endDate,
              "MM/dd/yy"
            )}`}
            onClick={() => setCalenderOn((bool) => !bool)}
          />
          {calenderOn && (
            <DateRange
            
            editableDateInputs={false}
            onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="datePicker"
            />
          )}
        </div>

        <div
          className="header__reservationBox--options"
          onClick={() => setOptionsOn(prev => !prev)}
          >
          <AiFillTool />
          <div>{`${options.children} Childrens - ${options.adults} Adults - ${options.rooms} Rooms `}</div>

          <div
          onClick={(e) => e.stopPropagation()}
          className={`reservationBox__options--btn ${optionsOn && "enabled"}`}
          >
       
            <div
            
            className="options__btnBox">
              <span>adults</span>
              <div>
                <button
                  disabled={options.adults === 0}
                  onClick={() => handleOptions("adults", "d")}
                >
                  -
                </button>
                <span>{options.adults}</span>
                <button onClick={() => handleOptions("adults", "i")}>+</button>
              </div>
            </div>

            <div className="options__btnBox">
              <span>children</span>
              <div>
                <button
                  disabled={options.children === 0}
                  onClick={() => handleOptions("children", "d")}
                  >
                  -
                </button>
                <span>{options.children}</span>
                <button onClick={() => handleOptions("children", "i")}>
                  +
                </button>
              </div>
            </div>

            <div className="options__btnBox">
              <span>rooms</span>
              <div>
                <button
                  disabled={options.rooms === 0}
                  onClick={() => handleOptions("rooms", "d")}
                  >
                  -
                </button>
                <span>{options.rooms}</span>
                <button onClick={() => handleOptions("rooms", "i")}>+</button>
              </div>
            </div>
          </div>
        </div>

        <button className="header__reservationBox--btn">Search</button>
      </div>
     </>

      }
    </header>
  );
};

export default Header;
