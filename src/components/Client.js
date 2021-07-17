import React from "react";
import TopHeader from "./TopHeader";
import FooterSection from "./FooterSection";
import CaseStudy from "./CaseStudy";
import ClientsImg from "./ClientsImg";
import Testimonials from "./Testimonials";
import "../css/client.css";
export const Client = () => {
  const case_study_arr = [
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613701020_Sectigo.png",
      "Sectigo",
      "Siloed legacy systems across sales, marketing,and customer service teams resulted in inefficiencies. See how we helped.",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613620980_Redstone.png",
      "Redstone",
      "Redstone’s legacy system was onerous, clunky, and difficult to navigate, which resulted in redundancies. We turned it around. ",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621100_ORtellligence.jpg",
      "ORtelligence",
      "Full product development including AI, Machine Learning, Image Recognition, and Voice Recognition. Read the full case study below.",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621280_Screen Shot 2021-02-17 at 4.10.43 PM.png",
      "SQD Gallery",
      "Find out how we built a website to help SQD manage artists and sell artwork. Read the full case study below.",
    ],
    [
      "https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621520_Screen Shot 2021-02-18 at 11.06.47 AM.png",
      "Citizens Utility Board ",
      " We migrated CUB off of their legacy CRM to NPSP. We then set up an integration with an online giving platform. Read the full case study below.",
    ],
  ];

  const client_arr = [
    "https://agilecloudconsulting.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-06-at-10.16.07-AM-300x94.jpeg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/sectigo_logo_color.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/logo.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/PrisonFellowship_RGB_FL-2-300x79.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/1200px-Feeding_America_logo.svg-300x175.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/BeyondTrust-Logo-300x76.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/02/Bankers-e1582559850800.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/12/Villanova-University-e1607555976794-300x90.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-09-at-11.17.44-AM.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/02/Ross-University-300x62.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Concordia_University_Oregon_logo.svg-300x72.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/07/loop-and-tie-300x81.png",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/04/Logo_1403991806-300x90.jpeg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Warstwa-7.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/pobrane.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/jungroup_logo_new-red.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/spincar.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/pobrane-2.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Ten_Logo_r_rgb_L__1_.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Ideeli_logo.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/comodo-logo2.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/0.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Warstwa-8.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/trading_advantage.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Retina_SLN.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/telecom-ny-logo.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/logo2.svg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-09-at-11.24.53-AM-300x91.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/04/CUB-logo-300x56.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/BF_Logo_NE_.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/4cf42c03fbe920b268d2afe34c91281f-university-life-noodles.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/hon-orginal-long-retinacharcoal.jpg ",
    " https://agilecloudconsulting.com/wp-content/uploads/2019/08/SCC-Registered-Trademark-2.jpg",
    " https://agilecloudconsulting.com/wp-content/uploads/2019/08/Warstwa-9.jpg",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/atLogoFull.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/b1bf821edcfcc5e591ad0a720552aba4.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/Warstwa-10.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/upload-29.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2019/08/logo-wsf.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/01/Love-Does-e1579027859200.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/02/Carenet-300x90.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/05/Cap-NWA-all_Yllw-300x90.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2020/12/Redstone-300x92.jpg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-25-at-9.38.55-AM-e1616679615242.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-07-at-9.00.45-AM-300x158.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/04/Revea-Logo.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-27-at-11.19.16-AM-e1619536952762-300x163.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-19-at-1.16.13-PM.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/9208942-logo-300x130.jpeg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/epicenter_logo3-300x69.jpeg ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-28-at-11.26.15-AM-300x124.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/05/cropped-cub-logo-329px.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-04-at-8.56.35-AM.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/06/Docent.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-14-at-4.52.22-PM.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-21-at-8.54.50-PM-300x62.png ",
    "https://agilecloudconsulting.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-23-at-4.36.16-PM-300x158.png ",
  ];

  const test=[
    ["https://agilecloudconsulting.com/wp-content/uploads/2019/08/1-Steve-Wantz.jpg","https://agilecloudconsulting.com/wp-content/uploads/2019/08/stars.jpg","Absolute Pleasure to Work With","“Sharif and his team set the bar high when it comes to quality and consistent delivery of work. Not only were we able to complete a large-scale sales cloud implementation in LEX, Sharif and team stuck by to provide guidance to ensure a very high rate of adoption amongst the team here at SpinCar. I could not be happier with the result of this partnership. We've even decided to keep Agile Cloud Consulting on board in an ongoing developer support capacity! I would absolutely recommend Sharif and his team of highly skilled consultants.”","Steve Wantz"],
    ["https://agilecloudconsulting.com/wp-content/uploads/2019/08/2-George-Ehrhardt.jpg","https://agilecloudconsulting.com/wp-content/uploads/2019/08/stars.jpg","Trusted Partner","Our company has relied on Agile Cloud Consulting to navigate the complex world of Salesforce. We have used them over the past several years and enjoy having a trusted partner that performs high quality and helps us to achieve the goals of our business. I cannot recommend highly enough the value of the expertise and results that you get from Agile Cloud Consulting.”","George Ehrhardt"],
    ["https://agilecloudconsulting.com/wp-content/uploads/2019/08/3-Collin-Palkovitz.jpg","https://agilecloudconsulting.com/wp-content/uploads/2019/08/stars.jpg","Hands down, my team of choice","“Working with Agile Cloud Consulting has been a fantastic experience from beginning to end every time I've had the pleasure of working with them. I couldn't be happier! I turn to Agile whenever I need Salesforce work done internally. I also routinely recommend them to clients and partners. It's hard to find someone so skilled, thorough, and easy to work with. I can't recommend this team more strongly.”","Collin Palkovitz"],
    ["https://agilecloudconsulting.com/wp-content/uploads/2019/08/4-John-Chang.jpg","https://agilecloudconsulting.com/wp-content/uploads/2019/08/stars.jpg","Top Notch Implementation Team & Business Partner!","“Having worked with many Salesforce consultants over the last 10 years, Agile Cloud Consulting has been the absolute best partner I've ever worked with. Despite what we considered internally to be an extremely aggressive timeframe, Sharif and his team were able to come in, spec out, and complete our project professionally, comprehensively - and on time! We had another large Salesforce consultancy come and bid out on our lightning reimplementation - and they would not have even been able to finish their discovery in the time that ACC completed the ENTIRE project.”","John Chang"],
  ];
  return (
    <div>
      <TopHeader />
      <div className="client_img_div">
        <center>
          <h1 className="image_text">CLIENTS</h1>
        </center>
      </div>
      <div>
        <center>
          <h2 className="casestudy_header mt-5">Case Studies</h2>
        </center>
        <div className="casestudy  ">
          {case_study_arr.map((data) => (
            <CaseStudy image={data[0]} heading={data[1]} text={data[2]} />
          ))}
        </div>
      </div>

      <div className="our_clients_div">
        <center>
          <h2 className="casestudy_header pt-5 mb-5">OUR CLIENTS</h2>
        </center>
        <div className="our_clients_ container">
          {client_arr.map((data) => (
            <ClientsImg image={data} />
          ))}
        </div>
      </div>

      <div className="testimonials">
       <center> <h1 className="test_text mt-5 mb-4">CLIENTS TESTIMONIALS</h1></center>
        <div class=" test_inner_div">
          {test.map((data) => (
            <Testimonials
              image={data[0]}
              second_image={data[1]}
              label={data[2]}
              text={data[3]}
              name={data[4]}
            />
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default Client;
