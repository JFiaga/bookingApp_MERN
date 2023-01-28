import  { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

import { useLocation } from "react-router-dom";
import { Header, HotelsListResults } from "../../components";
import "./HotelList.scss";

const HotelsList = () => {
  const location = useLocation();

  const [date, setDate] = useState(location.state.date);
  const [calenderOn, setCalenderOn] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [destination, setDestination] = useState(location.state.destination);

  return (
    <>
      <Header type={"hotelList"} />
    <div className="hotelList">
    <div className="hotelList__container">


<div className="hotelList__container--searchBox">
  <span className="search">search</span>
  <div className="searchBox__destination">
    <label htmlFor="destination">Destination</label>
    <input
      onChange={(e) => setDestination(e.target.value)}
      type="text"
      id="destination"
      defaultValue={destination || "Madrid"}
      placeholder="Enter your destination"
    />
  </div>

  <div className="searchBox__date">
    <label htmlFor="destination">Check-in-date</label>
    <span onClick={() => setCalenderOn(prev => !prev)}>
      {`${format(date[0].startDate, "MM/dd/yy")} to ${format(
        date[0].endDate,
        "MM/dd/yy"
      )}`}
    </span>
    {calenderOn && (
      <div>
        <DateRange
            minDate={new Date()}
            editableDateInputs={false}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="datePicker"
        />
      </div>
    )}
  </div>

  <div className="searchBox__options">
    <span>Options</span>
    <div>
      <label htmlFor="minPrice">Min Price</label>
      <input type="number" max="99" min="0" id="minPrice" />
    </div>
    <div>
      <label htmlFor="maxPrice">Max Price</label>
      <input type="number" max={99} min={0} id="maxPrice" />
    </div>
    <div>
      <label htmlFor="adult">adults</label>
      <input
        type="number"
        max={99}
        min={0}
        id="adult"
        defaultValue={options.adults}
      />
    </div>
    <div>
      <label htmlFor="children">childrens</label>
      <input
        type="number"
        max={99}
        min={0}
        id="children"
        defaultValue={options.childrens}
      />
    </div>{" "}
    <div>
      <label htmlFor="rooms">rooms</label>
      <input
        type="number"
        max={99}
        min={0}
        id="rooms"
        defaultValue={options.rooms}
      />
    </div>

  </div>
  <button className="searchBox__btn">Search</button>

</div>

{/* Results */}
<div className="hotelList__container--results">
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
  <HotelsListResults/>
</div>
</div>
    </div>
    </>
  );
};

export default HotelsList;
