import React, { Fragment,useEffect } from "react";
import { MetaTags } from "react-meta-tags";

const Ads=(props)=>{


    // useEffect(()=>{
   
    //   fetch(`/script/${props.id}`).then((res)=>{
    //     const scriptTag=document.createElement("script");
    //     scriptTag.src=`http://localhost:3030/script/${props.id}`
    //     document.head.appendChild(scriptTag); 


    //   });
    //   fetch(`/script1/${props.id}`).then((res)=>{
    //     const scriptTag=document.createElement("script");
    //     scriptTag.src=`http://localhost:3030/script1/${props.id}`
    //     document.head.appendChild(scriptTag); 


    //   }) 
    // },[]) 
    return(
<Fragment>
  <MetaTags>
  <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-${props.adsId}`}></script>
  <script  src={`http://localhost:3030/script/${props.id}`}></script>
  <script  src={`http://localhost:3030/script1/${props.id}`}></script>

  </MetaTags>

</Fragment>
    )
}
export default Ads;