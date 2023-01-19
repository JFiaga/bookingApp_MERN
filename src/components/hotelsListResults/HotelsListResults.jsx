import "./HotelsListResults.scss";

const HotelsListResults = () => {
  return (
    <div className="hotelsListResults">
      <div className="hotelsListResults__img">
        <img
          src={`https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
          alt=""
        />
      </div>
      <div className="hotelsListResults__desc">
        <div className="hotelsListResults__desc--left">
          <h2>Tower Street Apartments</h2>
          <span>500m from center</span>
          <span>free airport taxi</span>
          <span>studio apartment with air conditioning</span>
          <span>Entire studio - 1 bathroom - 21m2</span>
          <span>free cancelllation</span>
          <span>You can cancel later, so lock in this great price today</span>
        </div>
        <div className="hotelsListResults__desc--right">
          <p>
            <span>Excellent</span>
            <button>8.9</button>
          </p>

          <div>
            <span>$122</span>
            <span>includes taxes and fees</span>
            <button>see avaibility</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsListResults;
