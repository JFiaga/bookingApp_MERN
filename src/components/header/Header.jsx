import { useState } from "react";
import "./Header.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaBed, FaCalendar, FaCar, FaFly, FaTaxi } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";

const Header = () => {
  const [calenderOn, setCalenderOn] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const headerIconsValues = [
    { icon: FaBed, value: "stays" },
    { icon: FaFly, value: "flights" },
    { icon: FaCar, value: "car rentals" },
    { icon: AiOutlineLineChart, value: "attractions" },
    { icon: FaTaxi, value: "airport taxis" },
  ];

  return (
    <header>
      <div className="icons__container">
        {headerIconsValues.map((item, index) => (
          <div key={index} className="icons__container--box">
            {<item.icon />}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
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
          {calenderOn &&  <DateRange
            editableDateInputs={false}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='datePicker'
            />
          }
          
         
        </div>
      </div>
    </header>
  );
};

export default Header;
