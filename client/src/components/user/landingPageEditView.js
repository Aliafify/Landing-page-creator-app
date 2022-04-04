import React, { Fragment } from "react";
import Lpage from "../landingPage";
function ViewPage(props) {
    const {style,content,phone,user}=props;
    return (
     <Fragment>
 
         <div className="main">
             <Lpage style={style} content={content} phone={[phone]} user={user}/>

         </div>


          
     </Fragment>   
     
    );
  }
  export default ViewPage;
  