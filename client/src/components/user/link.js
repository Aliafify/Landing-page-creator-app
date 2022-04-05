import React, { Fragment } from "react";

const Buttonlink=(props)=>{
    const handlechange=props.handlechange;
    return(
<Fragment>
<div className="phone wh" style={{display:props.display}}>
                    <a href={props.link}
                        target="_blank"
                        rel="noreferrer" onClick={handlechange} >{props.name}<img className="whats-icon-btn" src={props.icon} alt=""></img></a>

                </div>

</Fragment>
    )
}
export default Buttonlink;