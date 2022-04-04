import React, { Fragment } from "react";

const Buttonlink=(props)=>{
    const handlechange=props.handlechange;
    return(
<Fragment>
<div className="phone wh" style={{display:props.display}}>
                    <a href={`https://api.whatsapp.com/send/?phone=%2B${props.link}&text&app_absent=0`}
                        target="_blank"
                        rel="noreferrer" onClick={handlechange} >{props.name}<img className="whats-icon-btn" src={props.icon} alt=""></img></a>

                </div>

</Fragment>
    )
}
export default Buttonlink;