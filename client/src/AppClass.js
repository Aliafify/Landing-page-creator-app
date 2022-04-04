import React  from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route,Routes  } from 'react-router-dom';
import Context from './components/context/context';
import Home from "./components/home.js";
import HowWork from "./components/howWork.js";
import Prices from "./components/pricesPlane.js";
import WhoUs from "./components/whoUs.js";
import Registration from "./components/registration/register.js";
import Login from './components/registration/login';
import ServiceGuide from './components/servicesGuide';
import User from './components/user/user.js';
import { Fragment } from 'react/cjs/react.production.min';
import Lpage from './components/landingPage';
import Nav from './components/nav';
{/*useEffect(() => { 
  let auth = localStorage.getItem("auth");
  let user = localStorage.getItem("user");
  auth && JSON.parse(auth) ? setAuth(true) : setAuth(false);
   setUser(user);

}, []);
useEffect(() => {
 localStorage.setItem("auth", auth);
 localStorage.setItem("user", user);
}, [auth,user]);*/}

class App extends React.Component{
   
    constructor(){
        super();
        this.state={
            users:["test"],
            user:{},
            auth:false,
            
        }
    }
    componentWillMount(){
        fetch('/getRout').then(res=>res.json())
        .then(data=>this.setState({users:data}));
        let auth = localStorage.getItem("auth");
        let user = localStorage.getItem("user");
        if(auth){
           this.setState({auth:true}) ;
           this.setState({user:user});
           
        }
        console.log(user);
        console.log(auth);
    }
     componentDidUpdate(){
       localStorage.setItem("auth", this.state.auth);
       localStorage.setItem("user", this.state.user);
       console.log("saved")
       //let auth = localStorage.getItem("auth");
    //    let user = localStorage.getItem("user");
    //    //auth && JSON.parse(auth) ? this.setState({auth:true}) : this.setState({auth:false});
    //   this.setState({user:user});
     }
  //    componentDidUpdate(){
  //     //localStorage.setItem("auth", this.state.auth);
  //     //localStorage.setItem("user", this.state.user);
     
  //     //auth && JSON.parse(auth) ? this.setState({auth:true}) : this.setState({auth:false});
  //  //   this.setState({user:user});
  //   }
 
  
    render(){
      console.log(this.state.users)

        return (
          <BrowserRouter>
         <Context.Provider value={this.state.user}>
          
        
              
        <Routes>
        {!this.state.auth ?(
        <Fragment>
      <Route  path="/" element={<Nav/>}>
         <Route  path="" element={<Home/>}/> 
         <Route exact path="registration"
            element={ <Registration 
                setUser={(u)=>{this.setState({user:u});}} 
                setAuth={(u)=>{this.setState({auth:u})}}
             />}/>
       
           <Route  path='log-in' 
              element={<Login
                 setUser={(u)=>{this.setState({user:u})}} 
                 setAuth={(u)=>{this.setState({auth:u})}}
              />}/> 
           <Route  path="/who-us" 
              element={<WhoUs/>}
                />
           <Route  path='/prices-planes' 
               element={<Prices/>}/>
   
           <Route  path="/how-it-work" element={<HowWork/>}/>
           <Route  path="/services-guied" 
               element={<ServiceGuide/>}/>
        </Route>
        {
        this.state.users.map((u,index)=>
        <div key={index}>
        
            <Route  path={'/'+index+u.url }
            element={<Lpage />}/>
        </div>
        )
        }
            </Fragment>
          ):
        (
            <Fragment>
             
              <Route  path={'/'+this.state.user.url}
              
              element={<User
                   setAuth={(u)=>{this.setState({auth:u})}}
                   setUser={(u)=>{this.setState({user:u})}}
                   user={this.state.user}
                   auth={this.state.auth}
                 />}
            />
            
            </Fragment>
          )}
        
        <Route path="*" element={<Navigate to={this.state.auth ? '/'+this.state.user.url :"/"} />} />
        
        
          
          </Routes>
        
        
          </Context.Provider>
         
        </BrowserRouter> 
        );
    }
}
    
     
     

     
   
    


export default App;
