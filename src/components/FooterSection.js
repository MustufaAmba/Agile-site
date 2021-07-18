import React from "react";
import "../css/footercss.css";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
const FooterSection = () => {
  return (
    <div>
      <div className="firstdiv">
        <h1 className="firstdiv_text">Agile Cloud Consulting</h1>
        <h6 className="firstdiv_text1">"Sprint To Your Success"</h6>
        <div className="contactusdiv">
          <Link to="/Contact_us" className="link">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="seconddiv">
        <div className="footer_logo">
          <div>
              <Link to="/"><img 
              src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/agile-cloud-consulring-logo-2.jpg"
              alt="footer_img"
            /></Link>
           
          </div>
          <div className="social_media">
            <a className="social_media_css"
              href="https://www.facebook.com/agilecloudconsulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/facebook.png"
                alt=""
                title="facebook"
              />
            </a>
            <a className="social_media_css"
              href="https://www.instagram.com/agilecloudconsulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/Instagram.png"
                alt=""
                title="Instagram"
              />
            </a>
            <a className="social_media_css"
              href="https://www.linkedin.com/company/agile-cloud-consulting-l.l.c./"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/linkedin.png"
                alt=""
                title="linkedin"
              ></img>
            </a>
            <a className="social_media_css"
              href="https://twitter.com/agilecloudcons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/twitter.png"
                alt=""
                title="twitter"
              />
            </a>
            <a className="social_media_css"
              href="https://agilecloudconsulting.com/agile-clouds-comic/feed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/00204564462763e16a3d4f9fd3aeceb0-rss-ring-icon-by-vexels.png"
                alt=""
                title="00204564462763e16a3d4f9fd3aeceb0-rss-ring-icon-by-vexels"
              />
            </a>
          </div>
        </div>
        <div className="footer_links">
          <div className="Links_div">
            <h3 className="Links_header">Links</h3>
            <Link to="/OurServices" className="footer_link_css">
              Services
            </Link>
            <Link to="/Methodology" className="footer_link_css">
              Methodology
            </Link>
            <Link to="/About_Us" className="footer_link_css">
              About
            </Link>
            <Link to="/Client" className="footer_link_css">
              Clients
            </Link>
            <Link to="/Contact_us" className="footer_link_css">
              Contact Us
            </Link>
          </div>
          <div className="Links_div">
            <h3 className="Links_header">Resources</h3>
            <Link to="/Blog" className="footer_link_css">
              Blog
            </Link>
            <Link to="/Agile_clouds_comic" className="footer_link_css">
              Agile clouds comic
            </Link>
            <Link to="/Press" className="footer_link_css">
              Press
            </Link>
            <Link to="/Careers" className="footer_link_css">
              Careers
            </Link>
          </div>
          <div className="Links_div">
            <h3 className="  Links_header  ">Contact</h3>

            <div>
              <CallIcon
                style={{ color: "#1BA0DB", marginRight: "10px" }}
                fontSize="small"
              ></CallIcon>
              <a className="footer_call" href="tel:+1 (888) 244-5350">
                +1 (888) 244-5350
              </a>
            </div>
            <div>
              <EmailIcon
                style={{ color: "#1BA0DB", marginRight: "10px" }}
                fontSize="small"
              >
                {" "}
              </EmailIcon>
              <a
                className="footer_mail"
                href="mailto:info@agilecloudconsulting.com"
                role="button"
              >
                info@agilecloudconsulting.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="Links_header">Legal</h3>
            <Link className="footer_link_css">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <footer className="finalfooter"><center>
  <span> &copy;  Copyrights 2021 Agile Cloud Consulting. All rights reserved.</span></center>
</footer>
    </div>
  );
};
export default FooterSection;
