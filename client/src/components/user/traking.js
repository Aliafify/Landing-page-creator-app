import React, {  useContext } from "react";
import whatsapp from '../assets/imgs/whatsapp.gif'
import Paypal from '../assets/imgs/paypal.svg'
import Context from "../context/context";

function TrakingDashBoard() {
    const {users}=useContext(Context);
    const Users=users[0];
    const adm=Users.filter(u=>{
        if (u.role==="admin"){
              return u
              
            }
        });
        const Adm=adm[0]
    return (
        <>

 <section className='enable-following'>
     <div className="flex-c-r" >
<h1>

تنوية هام :
</h1>
          <p className="info">
<i className="ti-arrow-left"></i>
إذا اردت تفعيل خواص التتبع والاحالة الناجحه تواصل مع الدعم الفنى الخاصية مدفوعه وليست مجانية 


<span><a href={`https://api.whatsapp.com/send/?phone=%2B${Adm.whatsapp}&text&app_absent=0`} className="link"><img className="whats-icon" src={whatsapp} alt=""></img></a></span>
    </p>
    <p className="info">
<i className="ti-arrow-left"></i>
او من خلال خدمة الدفع Paypal 


<span><a href={Adm.paypal} className="link"><img className="paypal-icon" src={Paypal} alt=""></img></a></span>
    </p>
     </div>
{/* <div className='flex-center'>
<a href='https://wa.me/0201210949604'>whatsapp</a>
</div> */}
          </section>
    
     </>   
     
    );
  }
  export default TrakingDashBoard;
  