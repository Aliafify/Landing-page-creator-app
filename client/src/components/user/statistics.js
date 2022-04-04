import React, { Fragment, useContext } from "react";
import Context from "../context/context";
function Statistics(){
    const {user}=useContext(Context);
    const[User,setUser]=user;
    return(
        <Fragment>
             <section className=' flex-h-space-arround'>
         
              <div className='stat flex-v-space-between'>
              <h4>

              اجمالى عدد النقرات
              </h4>
              <p>
                  {User.clicks}
              </p>
              </div>
              <div className='stat flex-v-space-between col-lg-4'>
                  <h4>

              تاريخ الانضمام
                  </h4>

                <p className=" text-muted ">
                    {User.date}
                    
                </p>
              </div>

          </section>
          <section className='flex-h-space-arround'>
              <div className='stat flex-v-space-between'>
               whatsapp
               <p>+{User.content.whatsapp}</p>
              </div>
              <div className='stat flex-v-space-between'>
              Phone
              <p>
                  {User.phone}
              </p>
              </div>
          </section>
        </Fragment>
    )

}
export default Statistics;