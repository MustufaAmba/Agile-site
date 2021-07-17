import React from "react";

const Testimonials = (props) => {
  const test_card = {
    height: "550px",
    width: "550px",
    backgroundColor: "white",
    margin: "15px",
    fontWeight: "600",
    boxShadow: "5px 10px 18px #888888",
  };
  return (
    <div style={test_card}>
      <div>
        <img
          style={{ borderRadius: "50%", margin: "30px 0px 15px 30px" }}
          src={props.image}
          alt="sds"
        />
      </div>
      <div>
        <img
          style={{ margin: "0px 0px 15px 30px" }}
          src={props.second_image}
          alt="star"
        />
      </div>
      <h5
        style={{
          margin: "0px 0px 15px 30px",
          color: "#2233523",
          fontWeight: "700",
        }}
      >
        {props.label}
      </h5>
      <p
        style={{
          margin: "0px 0px 15px 30px",
          padding: "0px 20px 10px 0px",
          color: "#5D7992",
          lineHeight: "200%",
        }}
      >
        {props.text}
      </p>
      <h6
        style={{
          margin: "0px 0px 15px 30px",
          fontWeight: "700",

        }}
      >
        {props.name}
      </h6>
    </div>
  );
};
export default Testimonials;
