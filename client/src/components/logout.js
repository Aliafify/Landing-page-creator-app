import React, { Fragment, useContext } from "react";
import {  useNavigate } from "react-router-dom";
import Context from "./context/context";

const Logout=()=>{
    const {setAuth}=useContext(Context);
    const navigate=useNavigate();
    const logOut=()=>{
        setAuth(false);
        navigate("/"); 
    }
    return(
<Fragment>
<div className="dropdown-divider"></div>
    <a className="dropdown-item" onClick={()=>logOut()} >
        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
        Logout
    </a>

</Fragment>
    )
}
export default Logout;