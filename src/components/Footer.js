import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="row"
        style={{
          position: "absolute",
          Buttom: "0px",
          backgroundColor: "#1A2326",
          width: "100%",
        }}
      >
        <div className="col-md-6 offset-md-4">
          <ul className="d-flex " style={{ listStyleType: "none" }}>
            <li className="m-4">
              <i className="fab fa-facebook"></i>
            </li>
            <li className="m-4">
              <i className="fab fa-twitter"></i>
            </li>
            <li className="m-4">
              <i className="fab fa-google-plus-g"></i>
            </li>
            <li className="m-4">
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
          <div className="row m-4">
            <div className="col">
              <label
                htmlFor="exampleFormControlInput1 "
                className="form-label text-white"
              >
                Sign up for our news letter
              </label>
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="col">
              <button className="btn btn-light">Subscribe</button>
            </div>
          </div>
          <div className=" copyright m-4 text-white">
            &copy; 2021 Copyright:My Movies.com
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
