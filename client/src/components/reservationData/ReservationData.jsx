import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { AiFillTool } from 'react-icons/ai';
import { FaBed, FaCalendar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ReservationData.scss'






const ReservationData = () => {

     //Destination state to use with navigate
  const [destination, setDestination] = useState("");

  // Selecet the date and Calendar on/off
  const [calenderOn, setCalenderOn] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //For increase or decrease the numbers of options
  const [options, setOptions] = useState({
    adults: 0,
    childrens: 0,
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

  //for print the option pannel
  const [optionsOn, setOptionsOn] = useState(true);

  //to redirect in the hotelList page with the options data
  const navigate = useNavigate();

  const searchHandleClick = () => {
    navigate("/hotelslist", { state: { destination, options, date } });
  };

  return (
    <div className="reservationBox">
    <div className="reservationBox__search">
      <FaBed  className="reservationBox--icon"/>
      <input
        type="text"
        placeholder="Where are you going ?"
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>


    <div className="reservationBox__calendar">
      <FaCalendar className="reservationBox__calendar--icon" />

      <input
        value={`${format(
          date[0].startDate,
          "MM/dd/yy"
        )} - ${format(date[0].endDate, "MM/dd/yy")}`}
        onClick={() => setCalenderOn((bool) => !bool)}
      />
      {calenderOn && (
        <DateRange
          minDate={new Date()}
          editableDateInputs={false}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="datePicker"
        />
      )}
    </div>



    <div
      className="reservationBox__options"
      onClick={() => setOptionsOn((prev) => !prev)}
    >
      <AiFillTool className="" />
      <div>{`${options.childrens} Childrens - ${options.adults} Adults - ${options.rooms} Rooms `}</div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`reservationBox__options--btn ${
          optionsOn && "disabled"
        }`}
      >
        <div className="options__btnBox">
          <span>adults</span>
          <div>
            <button
              disabled={options.adults === 0}
              onClick={() => handleOptions("adults", "d")}
            >
              -
            </button>
            <span>{options.adults}</span>
            <button onClick={() => handleOptions("adults", "i")}>
              +
            </button>
          </div>
        </div>

        <div className="options__btnBox">
          <span>children</span>
          <div>
            <button
              disabled={options.childrens === 0}
              onClick={() => handleOptions("childrens", "d")}
            >
              -
            </button>
            <span>{options.childrens}</span>
            <button onClick={() => handleOptions("childrens", "i")}>
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
            <button onClick={() => handleOptions("rooms", "i")}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>

    <button
      onClick={searchHandleClick}
      className="reservationBox--btn"
    >
      Search
    </button>
  </div>
  )
}

export default ReservationData