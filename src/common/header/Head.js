import React from "react";
import "./Header.css";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fas fa-phone"></i>
            <label htmlFor=""> +994 78 000000</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor=""> example@gmail.com</label>
          </div>
          <div className="right row RText">
            {/* <span>🏳️‍⚧️</span> */}
            <label>EN</label>
            {/* <span>🏳️‍⚧️</span> */}
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
