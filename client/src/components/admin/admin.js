import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logout from "../logout";
import Table from "./table";

const Admin=()=>{
    
    return(
<Fragment>


<div id="wrapper">

{/* <!-- Sidebar --> */}
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3"> Admin <sup>2</sup></div>
    </a>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0"></hr>

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"></hr>

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Interface
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
   

    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>الضبط</span>
        </a>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">الضبط</h6>
                <Link className="collapse-item" to={"settings"} >ذهاب</Link>
              
            </div>
        </div>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"></hr>


    {/* <!-- Sidebar Toggler (Sidebar) --> */}
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
{/* <!-- End of Sidebar --> */}

{/* <!-- Content Wrapper --> */}
<div id="content-wrapper" className="d-flex flex-column">

    {/* <!-- Main Content --> */}
    <div id="content">

        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Search --> */}
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                   {/* insert search input here */}
                    
                </div>
            </form>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
              

                

              

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i></span>
                        {/* <img className="img-profile rounded-circle"
                            src="img/undraw_profile.svg"></img> */}
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        
                        <Link className="dropdown-item" to={'settings'}>
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </Link>
                       
                        <Logout/>
                    </div>
                </li>

            </ul>

        </nav>
        {/* <!-- End of Topbar --> */}

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-4 text-gray-800">الادارة</h1>
            <Table/>
        </div>
        {/* <!-- /.container-fluid --> */}

    </div>
    {/* <!-- End of Main Content --> */}

    {/* <!-- Footer --> */}
    {/* <footer className="sticky-footer bg-white">
        <div className="container my-auto">
            <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
            </div>
        </div>
    </footer> */}
    {/* <!-- End of Footer --> */}

</div>
{/* <!-- End of Content Wrapper --> */}

</div>

</Fragment>
    )
}
export default Admin;