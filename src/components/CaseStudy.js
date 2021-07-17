import React from 'react'

 const CaseStudy = ({image,text,heading}) => {
    const divstyle={
        display:"flex",
        flexDirection:"column",
        width:"250px",
        height:"400px",
        boxShadow: "2px 5px 18px #888888",
        marginRight:"20px"
     }
     const pstyle={
         width:"200px",
         margin:"0px 0px 20px 10px",
         color:"#5d7992",
         fontWeight:"500",
         wordWrap: "inherit",
         fontSize:"14px",
         lineHeight:"150%"
    }
    const bottomdiv={
        fontSize:"x-small",
        color:"white",
        backgroundColor:"#1BA0DB",
        height:"50px",
        width:"160px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        fontWeight:"600",
        position:"relative",
        bottom:"-30px"
    }
    return (
        <div style={divstyle}>
            <center><div >
            <img style={{margin:"10px 0 0 5px"}}
            src={image}
            alt="Services"
            height="130"width="180"/>
            </div></center>
            <center><h6 style={{margin:"10px 20px 15px 20px",fontWeight:"700"}}>
                {heading}</h6></center>
            <p style={pstyle}>
                {text}</p>
               <center><div style={bottomdiv}>
                    Read The Full Case Study
                </div></center>
        </div>
    )
}
export default CaseStudy