import React from "react";
import "../css/bigface.css";
const BigFaces = (props) => {
  return (
    <div>
      <div className="m-3">
        <center>
          <img
            className="bigfaceimage"
            src={props.image}
            alt="123"
            height="200"
            width="200"
            style={{ borderRadius: "50%" }}
          />
          <h5 className="bigfaceh5">{props.name}</h5>
          <p className="bigfacep">{props.post}</p>
        </center>
      </div>
    </div>
  );
};
export default BigFaces;
