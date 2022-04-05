import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import './components/user/userstyle.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Context from './components/context/context';
import Home from "./components/home.js";
import Registration from "./components/registration/register.js";
import Login from './components/registration/login';
import User from './components/user/user.js';
import Lpage from './components/landingPage';
import Nav from './components/nav';
import UserNav from './components/user/userNav';
import CustomizeLandingPage from './components/user/CustomizeLPage';
import ViewPage from './components/user/landingPageEditView';
import FileUpload from './components/file-upload/FileUpload';
import Admin from './components/admin/admin';
import Setadmin from './components/admin/setadmin';
import Ads from './components/googleads'
import Edit from './components/edit';

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState();
  const [property, setProperty] = useState("");
  const [scrip, setScript] = useState()
  const adminState = user.role === "user" ? false : true;

  useEffect(() => {
    fetch('/getRout').then(res => res.json())
      .then(data => setUsers(data));


  }, [user])


  useEffect(() => {

    let auth = localStorage.getItem("auth");
    let user = localStorage.getItem("user");
    if (JSON.parse(auth) === true) {
      setAuth(true);
      setUser(JSON.parse(user));
    }




  }, []);
  useEffect(() => {
    localStorage.setItem("auth", auth);
  }, [auth]);
  useEffect(() => {
    const userDetails = JSON.stringify(user);
    localStorage.setItem("user", userDetails);
  }, [user]);


  return (
    <BrowserRouter>
      <Context.Provider value={{ user: [user, setUser], admin: [admin, setAdmin], property: [property, setProperty], users: [users, setUsers], setAuth: setAuth, script: [scrip, setScript] }}>



        <Routes>
          {!auth ? (
            <Fragment>
              <Route path="/" element={<Nav />}>
                <Route path="" element={<Home />} />
              </Route>

              <Route path="/admin" element={<Admin />} />
              <Route exact path="/registration" element={<Registration setUser={setUser} setAuth={setAuth} />} />

              <Route path='/log-in'
                element={<Login
                  setAuth={setAuth}
                  setUser={setUser}
                />} />

              <Route path='/Ads'
                element={<Ads />

                } />

              {
                users.map(u =>


                  <Route key={u.id} path={'/' + u.url}
                    element={<Lpage
                      style={u.style}
                      content={u.content}
                      phone={u.phone}
                      user={u} />
                    } />

                )
              }

            </Fragment>
          ) :
            (
              // /* User Routes */
              <Fragment> {!adminState ? (
                <Fragment>
                  { /* User Dashboard */}
                  <Route path={'/dashboard'}
                    element={<UserNav url={user.url} />}>

                    <Route path={''} element={<User user={user} setAuth={setAuth} />}
                    />

                  </Route>
                  { /* User Landing page editor open conditionally */}
                  {user.open ? (
                    <Fragment>
                      <Route path={'/dashboard/edit-my-page'}
                        element={
                          <CustomizeLandingPage />}>

                        <Route path={''}
                          element=
                          {<ViewPage
                            style={user.style}
                            content={user.content}
                            phone={user.phone}
                            user={user} />} />
                        { /* upload rout open from editor  */}
                        <Route
                          path={'upload'}
                          element={
                            <div className='main'>
                              <div className='container mt-4 '>
                                <h4 className='display-4 text-center mb-4'>
                                  <i className='fab fa-react' />Upload File
                                </h4>
                                <FileUpload />
                              </div>
                            </div>
                          }
                        />
                      </Route>
                      <Route path="/dashboard/ads" element={<Edit p1="adsId" p2="sendTo" n1="ID" n2="'send_to': 'AW-xxxx/" type1="text" type2="text" userID={user.id} setUser={setUser} header={"اضافة ااكواد الاحالة"}/>} />

                    </Fragment>
                  ) : (

                    // rout if user not activated 
                    <Route />)

                  }

                  <Route
                    path={'/' + user.url}
                    element=
                    {<Lpage style={user.style}
                      content={user.content}
                      phone={user.phone}
                      user={user} />} />
                  <Route
                    path={'/dashboard/upload'}
                    element={
                      <div className='container mt-4'>
                        <h4 className='display-4 text-center mb-4'>
                          <i className='fab fa-react' />Upload File
                        </h4>
                        <FileUpload />
                      </div>
                    }
                  />

                </Fragment>

              ) : (
                /*        Admin       */
                <>
                  <Route path={'/admin-dashboard'} element={<Admin />} />
                  <Route path={'/admin-dashboard/settings'} element={<Setadmin />} />
                </>

              )}
              </Fragment>
            )

          }



          <Route path="*" element={<Navigate to={auth && '/dashboard/'} />} />


        </Routes>


      </Context.Provider>

    </BrowserRouter>
  );
}

export default App;
