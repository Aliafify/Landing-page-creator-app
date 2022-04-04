import React, { Fragment, useContext } from "react";
import Context from "../context/context";
import Edit from "../edit";

const Setadmin=()=>{
    const {user}=useContext(Context);
    const [User,setUser]=user;
    return(
<Fragment>
<div key={"2"}>

<Edit p1='email' p2="password" n1={'Email'} n2={'Password'} type1={"email"} type2={"password"} userID={User.id} setUser={setUser}/>
</div>
<div key={"2"}>

<Edit  p1='username' p2="phone" n1={'Name'} n2={'Phone number'} type1={"text"} type2={"tel"} userID={User.id} setUser={setUser}/>
</div>


</Fragment>
    )
}
export default Setadmin;