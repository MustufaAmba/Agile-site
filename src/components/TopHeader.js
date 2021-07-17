import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Topheadercss.css';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
const TopHeader = () => {
    return (
        <div>
            <div className="Topheader">
                <div className="Topheader-left">
                    <EmailIcon style={{ color: "white", margin: "10px" }} fontSize="small"></EmailIcon>
                    <a className="mail" href="mailto:info@agilecloudconsulting.com" role="button">info@agilecloudconsulting.com</a>
                    <CallIcon style={{ color: "white", margin: "10 5 10 30" }} fontSize="small"></CallIcon>
                    <a className="call" href="tel:+1 (888) 244-5350">+1 (888) 244-5350</a>
                </div>
                <div className="Topheader-right">
                    <Link className="headerlinks" to="/Blog" >Blog</Link>
                    <Link className="headerlinks" to="/Agile_clouds_comic" >Agile clouds comic</Link>
                    <Link className="headerlinks" to="/Press" >Press</Link>
                    <Link className="headerlinks" style={{ marginRight: "180px" }} to="/Careers" >Careers</Link>
                </div>
            </div>
            <div className="Bottomheader">
                <div className="logocss">
                    <img src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/agile-cloud-consulring-logo.png" alt="logo" height="82" width="300" />
                </div>
                <div className="Bottomheader-right">
                    <Link className="bottomheaderlinks" to="/" >Home</Link>
                    <Link className="bottomheaderlinks" to="/OurServices" >Services</Link>
                    <Link className="bottomheaderlinks" to="/Methodology">Methodology</Link>
                    <Link className="bottomheaderlinks" to="/About_Us" >About</Link>
                    <Link className="bottomheaderlinks" to="/Client" >Clients</Link>
                    <Link className="bottomheaderlinks" style={{ marginRight: "180px" }} to="/Contact_us" >Contact us</Link>
                </div>
            </div>
           
        </div>
    )
}
export default TopHeader;