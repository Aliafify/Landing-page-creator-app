import React from 'react'
import { useNavigate } from 'react-router-dom';
const Back=()=>{
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1);
        }

    return(
        <>
        
   <div className='goback'><a onClick={goBack}><i className='ti-arrow-left'></i> </a></div>
        </>
    )
}
export default Back