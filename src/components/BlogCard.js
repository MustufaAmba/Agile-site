import React from 'react'

const BlogCard = ({ image, date, text }) => {
    const divstyle = {
        display: "flex",
        flexDirection: "column",
        width: "370px",
        height: "420px",
        boxShadow: "2px 5px 18px #888888",
        marginRight: "20px"
    }
    const pstyle = {
        width: "340px",
        margin: "0px 0px 20px 10px",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "150%"
    }
    const footerstyle = {
        height: "170px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItem: "flex-end"
    }
    const linkstyle = {
        textDecoration: "none",
        fontWeight: "700",
        color: "#1BA0DB",
        float:"right",
        margin:"20px",
        marginLeft:"230px"
    }
    return (
        <div style={divstyle}>

            <img //style={{margin:"10px 0 0 5px"}}
                src={image}
                alt="Services"
                height="185" width="370" />
            <div style={footerstyle}>
                <h6 style={{ margin: "10px 20px 0px 20px", fontWeight: "700", color: "#ADADAD" }}>
                    {date}</h6>
                <p style={pstyle}>
                    {text}</p>
            </div>
            <a style={linkstyle} href="https://agilecloudconsulting.com/meet-the-team-jason-jensen-senior-consultant/">Learn More{" ->"}</a>
        </div>
    )
}
export default BlogCard;