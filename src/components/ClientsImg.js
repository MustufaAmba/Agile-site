import React from "react";

const Clients_img = ({ image }) => {
  return (
    <div
      style={{
        height: "90px",
        widht: "200px",
        margin: "10px 10px 10px 10px",
        backgroundColor: "white",
      }}
    >

        <center>
          <img
            style={{ marginTop: "25px" }}
            src={image}
            alt="abc"
            height="40"
            width="165"
          />
        </center>

    </div>
  );
};
export default Clients_img;
