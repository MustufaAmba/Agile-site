import React from "react";
import TopHeader from "./TopHeader";
import FooterSection from "./FooterSection";
import "../css/methodology.css";
import Listitems from "./Listitems";
const Methodology = () => {
  const method_arr = [
    "Methodology",
    "Salesforce Services",
    "Data Migration",
    "System Integration",
    "Product Development",
    "NGOC to NPSP",
  ];
  const list1 = [
    "Manage Growth with Predictable Releases",
    "Increase Visibility",
    "Deliver as One Team",
    "Manage Changing Priorities",
    "Deliver Value to Happy Customers",
  ];
  const list2 = [
    "Eliminate Waste",
    "Build Quality In",
    "Respect People",
    "Optimize the Whole",
    "Create Knowledge",
    "Just in Time Decisions",
    "Deliver Fast",
  ];
  const list3 = [
    "  Backlog Grooming",
    "Sprint Planning",
    "Daily SCRUM Call",
    "Sprint Review",
    "Sprint Retrospective",
  ];
  return (
    <div>
      <TopHeader />
      <div className="bg_image_div">
        <center>
          <h1 className="image_text">METHODOLOGY</h1>
        </center>
      </div>
      <div className="types_of_method">
        {method_arr.map((data) => (
          <p className="mt-2">{data}</p>
        ))}
      </div>
      <div className="salesforce_services container">
        <center>
          <h1 className="header_text_method">WHY AGILE CLOUD CONSULTING?</h1>
        </center>
        <div className="alltext">
          <p>
            We are a trusted partner that will help you transform your vision
            into reality. Our approach is based on seven SUCCESS principles that
            we have found to be the foundation for all of our successful
            implementations. Our teams have done projects together in the past
            and come to your project with an established cadence and delivery
            velocity. Here is what you can expect when you work with us.
          </p>
          <h5 className="mt-2 mb-2 font-weight-bold">The Sales Process</h5>
          <p>
            We will start with an initial call to see if working together makes
            sense. After getting to know your organization and your vision for
            success we will either estimate the project or propose an assessment
            project depending on the complexity of your requirements. If the
            estimate is approved we will send you an official proposal to sign
            off on.
          </p>
          <h5 className="mt-2 mb-2 font-weight-bold">Project Delivery</h5>
          <p>
            We will kickoff the project and assign the appropriate resources.
            Next we will conduct the discovery and write the user stories needed
            for the full project. The design phase will follow where we will
            finalize architecture and have you sign off on user stories. Once
            the build begins we will use the Agile Methodology to work as one
            team to deliver on time and on budget. Next the user acceptance
            testing and training will take place to prepare for go live. Once we
            go live we will be there to support and make sure we have complete
            user adoption. Many of our clients opt for post go live support and
            continue working with us on new projects. During the project you
            will receive weekly status reports and will know exactly where we
            stand along with a continuous risk assessment that provides full
            visibility for all stakeholders
          </p>
          <h5 className="mt-2 mb-2 font-weight-bold">
            What is Agile Methodology?
          </h5>
          <p>
            Agile software development refers to a group of software development
            methodologies based on iterative development, where requirements and
            solutions evolve thorough collaboration between self-organizing
            cross-functional teams. Agile methods promote a disciplined project
            management process that encourages frequent inspection and
            adaptation. It is a leadership philosophy that encourages teamwork,
            self-organization and accountability, a set of engineering best
            practices intended to allow for rapid delivery of high-quality
            software, and a business approach that aligns development with
            customer needs and company goals.
          </p>
          <center>
            <h4 className="mt-2 mb-5 font-weight-bold">
              Our 7 SUCCESS Principles
            </h4>
          </center>
        </div>
      </div>
      <div className="principal_div mb-5">
        <div className="principal_inner_div container ">
          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Success.png"
                alt=""
                title="Success"
              />

              <p className="h5 m-5">SUCCESS</p>
            </center>
          </div>
          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Simplified-Engineering.png"
                alt=""
                title="Simplified Engineering"
              />

              <p className="h5 m-5">1. Simplified Engineering </p>
            </center>
          </div>

          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Unified-Vision.png"
                alt=""
                title="Unified Vision"
              />

              <p className="h5 m-5">2. Unified Vision </p>
            </center>
          </div>

          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Education-Cloud.png"
                alt=""
                title="Education Cloud"
              />

              <p className="h5 m-5">3. Client Education</p>
            </center>
          </div>
        </div>
        <div className="principal_inner_div container">
          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Client-Involvement.png"
                alt=""
                title="Client Involvement"
              />

              <p className="h5 m-5">4. Client Involvement</p>
            </center>
          </div>

          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Exper-Product-Knowledge.png"
                alt=""
                title="Expert Product Knowledge"
              />

              <p className="h5 m-5">5. Expert Product Knowledge</p>
            </center>
          </div>
          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Secure-Data.png"
                alt=""
                title="Secure Data"
              />

              <p className="h5 m-5">6. Secure Data</p>
            </center>
          </div>
          <div className="individual_div">
            <center>
              <img
                src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/Scalable-Architecture.png"
                alt=""
                title="Scalable Architecture"
              />

              <p className="h5 m-5">7. Scalable Architecture</p>
            </center>
          </div>
        </div>
      </div>

      <div className="pattern_div m-5">
        <center>
          <h1 className="pattern_header">AGILE METHODOLOGY</h1>
        </center>
        <div className=" mt-5 patterndiv1st container">
          <div className="sixdivs1">
            <div>
            <img
              src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/3448012-128-1.png"
              alt=""
              title="3448012-128-1"
            />
            </div>
          </div>
          <center>
  
            <div className="circle_shape mr-5"></div>
            <div className="line_shape mr-5"></div>

          </center>
          <div className="d-flex flex-column sixdivs2">
            {list1.map((string) => (
              <Listitems data={string} />
            ))}
          </div>
        </div>
        <div className=" patterndiv1st container">
          <div className="d-flex flex-column sixdivs3 ">
            {list2.map((string) => (
              <Listitems data={string} />
            ))}
          </div>

          <center>
            <div className="circle_shape mr-5"></div>
            <div className="line_shape mr-5"></div>
          </center>
          <div className="sixdivs1">
            <div>
            <img
              src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/4230537-128.png"
              alt=""
              title="4230537-128"
            />
            </div>
          </div>
        </div>
        <div className=" patterndiv1st container">
          <div className="sixdivs1">
            <div>
            <img
              src="https://agilecloudconsulting.com/wp-content/uploads/2021/02/1931211-128.png"
              alt=""
              title="1931211-128"
            />
            </div>
          </div>
          <center>
            <div className="circle_shape mr-5"></div>
            <div className="line_shape mr-5"></div>
          </center>
          <div className="d-flex flex-column sixdivs6">
            {list3.map((string) => (
              <Listitems data={string} />
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};
export default Methodology;
