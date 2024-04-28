import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer>
      <section>
        <h1>Fashion</h1>
        <h3>Hover over the circle below</h3>
      </section>
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div id="cont">
            <div className="footer_center">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
