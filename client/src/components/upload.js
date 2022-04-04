import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from './context/context';
const Upload=(props)=>{
    const navigate=useNavigate();
    const {property}=useContext(Context);
    const [stateProperty,setProperty]=property;
    const handelClick=(e)=>{
        try{

             setProperty(e);
            navigate('/Dashboard/upload')
        }catch(err){
            console.error(err)
        }
    }

    return(
        <>
        
        <input className='' type="button" name={props.property} onClick={(event)=>handelClick(event.target.name)} value="background"/> 
        </>
    )
}
export default Upload;