import "./Footer.scss";

const Footer = () => {
  const footerArr = [
    "Country",
    "Region",
    "City",
    "District",
    "Airport",
    "Hotels",
  ];

  return (
    <footer className="footer">
      <div className="footer__linksContainer"> 
        {footerArr.map((link, index) => (
          <span key={index} className="footer__linksContainer--link">
            {link}
          </span>
        ))}
      </div>{" "}
      <div className="footer__linksContainer">
        {footerArr.map((link, index) => (
          <span key={index} className="footer__linksContainer--link">
            {link}
          </span>
        ))}
      </div>{" "}
      <div className="footer__linksContainer">
        {footerArr.map((link, index) => (
          <span key={index} className="footer__linksContainer--link">
            {link}
          </span>
        ))}
      </div>{" "}
      <div className="footer__linksContainer">
        {footerArr.map((link, index) => (
          <span key={index} className="footer__linksContainer--link">
            {link}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
