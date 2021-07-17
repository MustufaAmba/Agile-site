import React from 'react'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
 const Listitems = (props) => {
    return (
        <div>
             <div style={{color:"#5D7992",fontWeight:"500",lineHeight:"200%"}}>
              <CheckCircleIcon className="mr-2"fontSize="small" color="primary" />
              {props.data}
            </div>
        </div>
    )
}
export default Listitems