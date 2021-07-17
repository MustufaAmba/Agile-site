import React from 'react'

 const Awards = ({image,text,css}) => {
    return (
        <div>
            <center><img src={image} style={css}alt="awards"/>
            <p style={{width:"200px",fontSize:"15px",fontWeight:"500",marginTop:"20px"}}>{text}</p></center>
        </div> 
    )
}
export default Awards;