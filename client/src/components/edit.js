import React, { Fragment, useState } from "react";

const Edit=(props)=>{
    const [t1,setT1]=useState({});
    const [t2,setT2]=useState({});
    
    const onChange= (e,set)=>{
        const value= e.target.value;
        const property= e.target.name;

     set({[property]:value});
  }
  
  /* p1 property 1 , p2 property 2;
  n1  lable 1 , n2 lable 2,
  type1 ,type2  are types of input fields.*/
  const {p1,p2,n1,n2,type1,type2,userID,setUser}=props;

  const onSubmit=()=>{
       const data={...t1,...t2};
       const id=userID;
       console.log(data);
       try{
           
          fetch("/edit",{
          method:"post",
          credentials:"same-origin",
          headers: {  
              "Content-Type": "application/json",
          },
          body:JSON.stringify([data,id])
        }).then(async (response)=>{
            const res=await response.json();
            props.setUsers(res);
            console.log(res)
        });
    
        }catch(err){
            console.log("Server-problem");
        }
     }
    return(
<Fragment>
 
            <div key={n1} className="col-12">
                    <div  className="card ">
                      <div className="card-body">
                        <h4 className="card-title">تعديل الحساب الشخصى </h4>
                        <p className="card-description">  </p>
                        <div className="forms-sample" >
                          <div className="form-group">
                            <label >*{n1}</label>
                            <input type={type1} name={p1} className="form-control"  onChange={(event)=>onChange(event,setT1)} placeholder={n1}/>
                          </div>
                          <div className="form-group">
                            <label >*{n2}</label>
                            <input type={type2} name={p2} className="form-control"  onChange={(event)=>onChange(event,setT2)} placeholder={n2}/>
                          </div>
                          <button type="submit" className="btn btn-success mr-2" onClick={onSubmit}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
</Fragment>
    )
}
export default Edit;