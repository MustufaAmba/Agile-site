import React from "react";
import TopHeader from "./TopHeader";
import FooterSection from "./FooterSection";
import BigFaces from "./BigFaces";
import "../css/about_us.css";
const About_Us = () => {
  const employee = [
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614151740_SharifShaalan.jpg",
      "Sharif Shaalan ",
      " Founder & Chief Executive Officer",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614914880_TEA.jpg",
      "Timothy Ay",
      "President & Chief Technology Officer",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614151860_Najam Khawaja.png ",
      " Najam Khawaja",
      "Chief Operations Officer ",
    ],
    [
      " https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1619752440_WhatsApp Image 2021-04-21 at 11.17.42 PM.jpeg",
      "Wendy Davis ",
      " VP, Customer Experience",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1615088580_IMG_3882.jpg ",
      "Madhu Gadireddy ",
      "Chief Technical Architect",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1622280120_Longley Headshot.jpeg ",
      "Stuart Longley ",
      " VP, Sales & Alliances",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152100_Dan Reider.png ",
      "Dan Reider ",
      " Solutions Architect",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152100_Chris-Berg.jpg",
      "Chris Berg ",
      "Business Architect ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152160_Mustafa-Jhabuawala.jpg ",
      "Mustafa Jhabuawala ",
      "Technical Architect ",
    ],
    [
      " https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1621253040_Jason Jensen.jpeg",
      "Jason Jensen ",
      "Senior Consultant ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1625027400_jamesstakelum (1).png ",
      " James Stakelum",
      "Data Specialist ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1624867980_Nadia Nasim.jpeg ",
      "Nadia Nasim ",
      "Business Analyst ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152160_Emad-Ezzo.jpg ",
      "Emad Ezzo",
      "Business Analyst",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152160_Dost-Mir.png",
      "Dost Mir",
      "Business Analyst ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1624868220_Lynne photo (1).jpg",
      "Lynne Beckham",
      "Junior Business Analyst",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152220_Al-Tariq-Graves.png ",
      "Al Tariq Graves",
      "Creative Director",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152220_sara-alquresh.jpg",
      "Sarah Alqersh",
      "Marketing Specialist",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614399300_Screen Shot 2021-02-27 at 11.14.44 AM.png",
      "Josh Aragon",
      "Social Media Specialist",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614479820_WhatsApp Image 2021-02-27 at 5.08.02 PM.jpeg",
      "Christopher Martin",
      "Social Media Specialist",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1614152340_Omar-Medhat.jpeg",
      "Omar Medhat",
      "Graphic Design Specialist",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/team_member/1624869900_developers.jpeg",
      "200+ Full Stack",
      "Developers",
    ],
  ];
  return (
    <div>
      <TopHeader />
      <div className="bg_image_div_aboutus">
        <center>
          <h1 className="image_text">ABOUT US</h1>
        </center>
      </div>

      <div className="missionddiv">
        <center>
          <h1 className="misionheader mt-5">MEET OUR TEAM</h1>
        </center>
        <div className=" mt-5  d-flex ml-5">
          <img
            className="aboutuslogoimage mb-5"
            src="https://agilecloudconsulting.com/wp-content/uploads/2019/01/logowithchange1-e1612724269897.jpg"
            alt="123"
            height="200"
            width="400"
          />

          <div className="ourmissiontext">
            <h4 className="mb-3">Our mission</h4>
            <h4>
              At Agile Cloud Consulting, our passionate team of experts makes
              doing more–possible. With decades of industry knowledge, a
              customer-first mindset, and a tradition of dependability, we
              generate the momentum our partners need to sprint to their success
              – cheering them on the entire way.
            </h4>
          </div>
        </div>
      </div>
      <div className="Staffs container">
        {employee.map((data) => (
          <BigFaces image={data[0]} name={data[1]} post={data[2]} />
        ))}
      </div>
      <div className="ourpartners mt-5">
        <center>
          <h1 className="partner_header">OUR PARTNERS</h1>
        </center>
        <div className="container mt-5">
          <img
            className="mr-5"
            src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/dazeworks_1.png"
            alt="partners"
          />

          <img
            className="mr-5"
            src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/Netsutra.png"
            alt=""
            title="Netsutra"
          />

          <img
            className="mr-5"
            src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/NIM-Logo-Transparent-Background-300x78@2x-300x78.png"
            alt=""
            title="NIM-Logo-Transparent-Background-300&#215;78@2x"
          />

          <img
            className="mr-2"
            src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/onetenthconsulting.png"
            alt=""
            title="onetenth+consulting"
          />

          <img
            className="mt-5 "
            src="https://agilecloudconsulting.com/wp-content/uploads/2021/04/Jitterbit-logo-horizontal-RGB-300x67.png"
            alt=""
            title="Jitterbit-logo-horizontal-RGB"
          />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default About_Us;
