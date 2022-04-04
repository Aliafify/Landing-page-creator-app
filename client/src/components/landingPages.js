import React, { Fragment } from "react";
import Lpage from "./landingPage";
import { Route } from 'react-router-dom';
class LandingPages extends React.Component{
    render(){
        const {users}=this.props.users;
        return(
            <Fragment>
{
    users.map((u)=>
    <div key={u.id}>

        <Route  path={'/hello' }
        element={<Lpage />}/>
    </div>
    )
}
                </Fragment>

        )
    }
}
export default LandingPages;