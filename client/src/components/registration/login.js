import React, { Fragment,useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Back from '../back';

function Login(props) {
  let {setUser,setAuth}=props ;
const[trialuser,setTrialUser]=useState("");
const[caption,setCaption]=useState("");
const[pass,setPass]=useState("");
const navigate=useNavigate();

                    /*handelLogin */
const handelLogin=(e)=>{
      e.preventDefault(); 
  
      const credentials= {id:trialuser,pass:pass};
      try{
 
        fetch("/login",{
          method:"post",
          credentials:"same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(credentials)
        }).then(async (response)=>{
          const statu= response.status;
          if(statu===200){
            const res=  await response.json();
             await setUser(res);
             await setAuth(true);
            
             navigate("/Dashboard");
          }
          else{
            const res=  await response.text();
            setCaption(res);
            
           }
             
        
           
      
            
        })
             
      } catch(err){
          console.log("err");
      }
              }

             
  
  return (
    <Fragment>
    <form >
    <div id="login-box">
 <div className="left">
  <Back/>
   <h1>Sign In</h1>
   <span>{caption}</span>
   <input type="text" name="email" 
         placeholder="E-mail" 
         onChange={(event)=>setTrialUser(event.target.value)} required/>
   <input type="password" name="password" 
         placeholder="Password" 
         onChange={(event)=>setPass(event.target.value)}
         required />

   
<button onClick={handelLogin}>
 submit
</button>
 </div>
 
 {/* <div className="right">
   <span className="loginwith">Sign in with<br />social network</span>
   
   <button className="social-signin facebook">Log in with facebook</button>
   <button className="social-signin twitter">Log in with Twitter</button>
   <button className="social-signin google">Log in with Google+</button>
 </div> */}
 {/* <div className="or">OR</div> */}
</div>

    </form>

  </Fragment>
  );
}

export default Login;