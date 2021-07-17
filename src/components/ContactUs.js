import React from "react";
import "../css/contactus.css";
import TopHeader from "./TopHeader";
import FooterSection from "./FooterSection";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ReCAPTCHA from "react-google-recaptcha";
const ContactUs = () => {
  return (
    <div>
      <TopHeader />
      <div className="contact_img_div">
        <center>
          <h1 className="image_text">CONTACT US</h1>
        </center>
      </div>

      <center>
        <h1 className="contact_text mt-5 mb-5">CONTACT US</h1>
      </center>
      <div className="outer_div">
        <div className="inner_div1">
          <div className="details_div">
            <div>
              <LocationOnIcon
                style={{ color: "#1AA0DA", margin: "10 5 10 120" }}
                fontSize="large"
              ></LocationOnIcon>
              <a className="call" href="#">
                276 5th Avenue
              </a>
            </div>
            <p className="adrsss">Suite 704 - 3080</p>
            <p className="adrsss">New York, NY 10001</p>
            <p className="adrsss mt-4">Find us on Google Maps</p>
            <div>
              <CallIcon
                style={{ color: "#1AA0DA", margin: "10 5 10 120" }}
                fontSize="large"
              ></CallIcon>
              <a className="call2" href="tel:+1 (888) 244-5350">
                +1 (888) 244-5350
              </a>
            </div>
            <div>
              <MailIcon
                style={{ color: "#1AA0DA", margin: "10 5 10 120" }}
                fontSize="large"
              ></MailIcon>
              <a
                className="mail2"
                href="mailto:info@agilecloudconsulting.com"
                role="button"
              >
                info@agilecloudconsulting.com
              </a>
            </div>
          </div>
        </div>
        <div className="inner_div2">
          <div className="form_div">
            <form>
              <div className="actual_form">
                <div className="rowfirst mt-5 ml-5 mr-5">
                  <div classNAme="row1">
                    <h6 style={{ color: "#223353", fontWeight: "700" }}>
                      First Name
                    </h6>
                    <input className="inputformfiled" type="text" />
                  </div>
                  <div classNAme="row2">
                    <h6 style={{ color: "#223353", fontWeight: "700" }}>
                      Last Name
                    </h6>
                    <input className="inputformfiled" type="text" />
                  </div>
                </div>

                <div className="rowfirst  mt-4 ml-5 mr-5">
                  <div classNAme="row1">
                    <h6 style={{ color: "#223353", fontWeight: "700" }}>
                      {" "}
                      Email
                    </h6>
                    <input className="inputformfiled" type="text" />
                  </div>
                  <div classNAme="row2">
                    <h6 style={{ color: "#223353", fontWeight: "700" }}>
                      Company
                    </h6>
                    <input className="inputformfiled" type="text" />
                  </div>
                </div>
                <div className="row3">
                  <h6 style={{ color: "#223353", fontWeight: "700" }}>
                    Comments
                  </h6>

                  <textarea className="textareafiled"></textarea>
                  <ReCAPTCHA className="mt-4" sitekey="Your client site key" />
                  <button
                    type="submit"
                    className="submitbtn mt-3"
                    value="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default ContactUs;
