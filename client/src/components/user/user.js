import React, { Fragment } from 'react';
import TrakingDashBoard from './traking';
import Statistics from './statistics';
//import QuickL from './quickLinks';
import Logout from '../logout';

const User=(props)=>{
 
    const {user,setAuth}=props;
  
    return (
        <Fragment>
 
                 {/* <!-- Page content --> */}
<div className="main ">
                 {/* user profile header */}
  <div className='user-header'>
      <p>
      مرحبا بك
      <span>{user.username}</span>
      </p>
      <div className=" dropdown-menu-lift shadow animated--grow-in">
      <Logout/>
      </div>
      </div>
             {/* تفعيل خدمة التتبع والاحالات */}
     <TrakingDashBoard/>

          {/* statistics */}

         <Statistics/>

          {/* quick links */}
          {/* <QuickL/> */}
    
</div>
  
             
        </Fragment>


    )
}
export default User;