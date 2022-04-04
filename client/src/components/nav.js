import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Nav(props) {
  return (
    <div className="Nav">
       <div>
        <nav id="scrollspy" className="navbar page-navbar navbar-dark navbar-expand-md fixed-top">
        <div className="container ">
        <Link  className=" navbar-brand" to='/'><strong className="text-primary">L</strong><span className="text-light">PC</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <Link className="nav-link" to='/log-in'>
        تسجيل الدخول
        </Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to='/registration'>
        تسجيل حساب جديد</Link>
                    </li>
                    <li class="nav-item">
                    
        <a className="nav-link "
        href='#whous' src="">
            من نحن</a>
                    </li> 
                    <li class="nav-item">
                    <a className="nav-link"
        href='#prices'>
        خطط الاسعار</a>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link" href="#service">
        دليل الخدمات</a>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link"
        href='#work'>
        كيف يعمل</a>
                    </li>
                    <li class="nav-item">
                    <Link  className="nav-link" to='/'>الرئيسية</Link>

                    </li>
                </ul>
            </div>
    
    
    
   
   
       
   
      
    
        
    
    
   
    
    <div className="log-cont">
        <img alt="" src=""></img>
    
    </div>
    </div>
        </nav>
    
    </div>
    <Outlet/>
    </div>
  );
}

export default Nav;