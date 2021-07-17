import React from 'react';
import TopHeader from './TopHeader';
import Awards from './Awards';
import Services from './Services';
import '../css/homecss.css';
import { Link } from 'react-router-dom';
import CaseStudy from './CaseStudy';
import BlogCard from './BlogCard';
import FooterSection from './FooterSection';
const Home = () => {
    const services_array = [
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564580_sales-cloud.png', 'Salesforce Services', 'Implementation and support services for all clouds.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_service-could.png', 'Data migration', 'Let us move your data with our 30+ years of data migration experience.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_community.png', 'System Integration', 'Custom integration services for all technologies.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_web-design.png', 'Product Development', '200+ Developers at your service.']
    ]
    const case_study_arr = [
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613701020_Sectigo.png', 'Sectigo', 'Siloed legacy systems across sales, marketing,and customer service teams resulted in inefficiencies. See how we helped.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613620980_Redstone.png', 'Redstone', 'Redstone’s legacy system was onerous, clunky, and difficult to navigate, which resulted in redundancies. We turned it around. '],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621100_ORtellligence.jpg', 'ORtelligence', 'Full product development including AI, Machine Learning, Image Recognition, and Voice Recognition. Read the full case study below.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621280_Screen Shot 2021-02-17 at 4.10.43 PM.png', 'SQD Gallery', 'Find out how we built a website to help SQD manage artists and sell artwork. Read the full case study below.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613621520_Screen Shot 2021-02-18 at 11.06.47 AM.png', 'Citizens Utility Board ', ' We migrated CUB off of their legacy CRM to NPSP. We then set up an integration with an online giving platform. Read the full case study below.']
    ]
    const blog_arr=[
        ['https://agilecloudconsulting.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-16-at-11.48.43-PM-510x255.jpeg', 'June 18, 2021', 'Meet the Team - Jason Jensen - Senior Consultant'],
        ['https://agilecloudconsulting.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-04-at-2.33.22-PM-510x255.jpeg', 'June 4, 2021', 'Meet the team - Emad Ezzo - Business Analys'],
        ['https://agilecloudconsulting.com/wp-content/uploads/2021/02/omni-channel-technology-of-online-retail-business-picture-id1204099658-510x255.jpg', 'May 7, 2021', 'THE SALESFORCE AUTOMATIONS ALL BUSINESSES SHOULD BE USING IN 2021']
    ]
    return (
        <div>
            <TopHeader />
            <div className="home_img">

                <div className="right_screen">
                    <img src="https://agilecloudconsulting.com/wp-content/uploads/2019/07/logo-salesforce.png" alt="" title="logo salesforce" />
                    <h2 className="maintext">Power up your business with salesforce</h2>
                    <p className="subtext">Unlock the efficiency of the Agile methodology for your next project</p>
                    <a href="https://agilecloudconsulting.com/wp-content/uploads/2021/03/Agile-Cloud-Consulting-Data-Sheet.pdf" download="" >
                        <img src="https://agilecloudconsulting.com/wp-content/uploads/2021/03/datadownload250_new.png" alt="download sheet" />
                    </a>
                </div>
                <div className="left_screen">
                    <iframe
                        title="video"
                        className="homevideo"
                        height="700" width="700"
                        src="https://player.vimeo.com/video/444361862"
                        allowFullScreen
                    >
                    </iframe>
                </div>

            </div>
            <div className="awardssection">
                <Awards
                    image="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1615438380_Salesforce-MVP-Logo-RGB-Horz.png"
                    text="Our CEO Sharif Shaalan is a Salesforce MVP" css={{ width: "250px" }} />
                <Awards
                    image="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613531700_Salesforce_Partner_Badge_RGB_Transparent-1.png"
                    text="We are a salesforce.com and salesforce.org Consulting Partner" />
                <Awards
                    image="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1615896120_Inc%205000.png"
                    text="We are the #21 fastest growing company in the N.Y. Metro" />
                <Awards
                    image="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613532480_salesforce-appexchange.png"
                    text="We have a 5 star rating on the AppExchange" />
                <Awards
                    image="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613619840_Pledge1.png"
                    text="We are a Pledge 1% Organization" />
            </div>

            <div className="Projectdiv">
                <div className="projectdivleft">
                    <header>
                        <h2 className="headertext">100+ Projects Delivered</h2>
                    </header>
                    <p className="projecttext">Your success is our success. Whether you&#8217;re looking for Salesforce services or product development we are here to be a trusted partner. Our use of the Agile methodology allows us to run lean while delivering exceptional value. Our Project Managers, Architects, Business Analysts, and Developers have years of hands on experience and a track record of working together as a team to deliver successful projects. We are experts.</p>
                </div>
                <div className="projectdivright">
                    <iframe title="second video" src='https://player.vimeo.com/video/513856035' height="600" width="600" frameBorder='0' allowFullScreen >
                    </iframe>
                </div>
            </div>

            <div className="ourservicediv">
                <center>
                    <h1 className="serviceheader">
                        Our services
                    </h1>
                    <p className="servicetext container">We are Salesforce experts, but it doesn't stop there. We offer platform agnostic data migration, system integration, and product development services to make us a one stop shop for your development and implementation needs.</p>
                </center>

            </div>
            <div className="servicesdiv ">
                {services_array.map((data, i) =>
                    <Services image={data[0]} heading={data[1]} text={data[2]}
                    />
                )}
            </div>
            <div className="Methodology">
                <center><h1 className="headertext">Our Methodology</h1>
                    <p className="methodtext container">We incorporate the sprint based Agile Scrum Methodology into all of our projects to deliver the highest value to our clients. Having two week sprints with agreed upon deliverables for each sprint allows us to incrementally complete the project as we work on the most important features first. We build cadence with your stakeholders and become one unified team working towards a common goal. You are involved every step of the way, allowing us to increase velocity and deliver more work in less time as the project progresses.</p>
                    <p>
                        <img alt="methodology" src="https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613725920_agilemethod (1).jpg" />
                    </p>
                    <Link className="methodlink" to="/Blog">Learn More About Methodology{"->"}</Link>
                </center>
            </div>
            <center><h1 className="casestudy_header">Case Studies</h1></center>
            <div className="casestudy  ">

                {
                    case_study_arr.map((data) =>
                        <CaseStudy image={data[0]} heading={data[1]} text={data[2]} />)
                }
            </div>

            <div className="horizontal_cards">
                <div className="m-4 carddiv">
                    <div>
                        <img className="m-4"src="https://agilecloudconsulting.com/wp-content/uploads/2019/07/salesforce-appexchange.png" alt="appexchange"/>
                    </div>
                    <p className="ml-4 mr-4">Our top rated Appexchange listing and reviews provide a deeper look into partnering with Agile Cloud Consulting.</p>
                    <a className=" mr-4 mt-2 learnmore"href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3A00000FvIr9UAF">Learn more{" ->"}</a>
                </div>
                <div className=" m-4 carddiv">
                    <div>
                        <img className="m-4"src="https://agilecloudconsulting.com/wp-content/uploads/2021/01/Salesforce-Assessment-300x50.png" alt="salesforce_assemment"/>
                    </div>
                    <p className="ml-4 mt-3 mr-4">Curious about what you should do in the short, medium, and long term to maximize your Salesforce investment?</p>
                    <a className=" mr-4 mt-2 learnmore"href="https://agilecloudconsulting.com/assessment/">Learn more{" ->"}</a>
                </div>
            </div>
            <div className="comicdiv">
            <img className="comicimg"src="https://agilecloudconsulting.com/wp-content/uploads/2019/08/comic.png" alt="" title="comic" /> 
                <div className="comictext">
                <h1 className="comicheader">Agile Clouds Comic</h1>
                <h6 className="comicmiddle">Created by: Al Tariq Graves & Sharif Shaalan</h6>
                <p className="comicptag">A Sunday comic strip about Admins, Developers and Consultants in the Salesforce ecosystem. Grab the edge of your seat and enjoy a captivating story of Adam, a Salesforce Admin slash hero.</p>
                <div className="comiclink">
                    <Link className="comiclink" to="/Agile_clouds_comic">The lastet Comic</Link>
                </div>
                </div>
            </div>
            <div className="blogpostdiv">
               <center><h1 className="blogheader m-5">Latest Blog Posts</h1></center>
              <div className="blogpost">
                {
                    blog_arr.map((data) =>
                        <BlogCard image={data[0]} date={data[1]} text={data[2]} />)
                }
                </div>
            </div>
                <FooterSection/>
        </div>
    )
}
export default Home