import React from 'react'
import TopHeader from './TopHeader'
import FooterSection from './FooterSection'
import Services from './Services'
import '../css/ourservices.css';
 const OurServices = () => {
    const services_array = [
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564580_sales-cloud.png', 'Salesforce Services', 'Implementation and support services for all clouds.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_service-could.png', 'Data migration', 'Let us move your data with our 30+ years of data migration experience.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_community.png', 'System Integration', 'Custom integration services for all technologies.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613564640_web-design.png', 'Product Development', '200+ Developers at your service.'],
        ['https://agilecloudconsulting.com/wp-content/plugins/agile-services/uploads/1613614920_1613564640_web-design.png','NGOC to NPSP',' We are the leading experts in NGOC to NPSP migration.']
    ]
    return (
        <div>
            <TopHeader/>
            <div className="imgdiv bg-center">
            <center><h1 className="img_text">OUR SERVICES</h1></center>
            </div>
            <div className="ourservicediv">
                <center>
                    <h1 className="serviceheader">
                        Our services
                    </h1>
                    <p className="servicetext container">We are Salesforce experts, but it doesn't stop there. We offer platform agnostic data migration, system integration, and product development services to make us a one stop shop for your development and implementation needs.</p>
                </center>

            </div>
            <div className="servicesdiv mb-5">
                {services_array.map((data, i) =>
                    <Services image={data[0]} heading={data[1]} text={data[2]} css={{width:"400px"}}
                    />
                )}
            </div>
            
            <FooterSection/>
        </div>
    )
}
export default OurServices