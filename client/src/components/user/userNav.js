import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import  Logo  from '../logo.svg';
function UserNav(props) {
  return (
      <div className='sidenav-cont'>
    <div className="sidenav">
     
     <img alt='logo' src={Logo}></img>
     <Link  className="nav-pages" to={""} >الرئيسية</Link> 


     <Link className="nav-page"
    to={"/"+props.url}>
        صفحتي</Link> 


    

    <Link className="nav-pages"
    to="edit-my-page">
    تعديل الواجهة</Link>
    <Link className="nav-pages"
    to="ads">
    الاحالات </Link>

    {/* <Link className="nav-pages" to='new-link'>
    اضافة رابط</Link> */}
    {/* <Link className="nav-pages" to='upload'>
    اضافة صورة</Link> */}
    </div>
    <Outlet/>
    </div>

  );
}

export default UserNav;