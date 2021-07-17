import React from 'react'

 const Services = ({image,text,heading}) => {
     const divstyle={
        display:"flex",
        flexDirection:"column",
        width:"230px",
        height:"300px",
        boxShadow: "5px 10px 18px #888888",
        marginRight:"30px"
     }
    return (
        <div style={divstyle}>
            <div>
            <img style={{margin:"35px 0px 20px 30px"}}
            src={image}
            alt="Services"/>
            </div>
            <h5 style={{margin:"0px 0px 20px 30px",fontWeight:"700"}}>
                {heading}</h5>
            <p style={{width:"180px",margin:"0px 0px 20px 30px",color:"#5d7992",fontWeight:"500"}}>
                {text}</p>
        </div>
    )
}
export default Services; 