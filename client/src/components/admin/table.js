import React, { Fragment,useContext, useEffect } from "react";
import Context from "../context/context";
import Delete from "./editAccount";
const Table=()=>{
    const {users}=useContext(Context);
    const[Users,setUsers]=users;
    useEffect(()=>{

    },[users])
    return(
<Fragment>

   
<div className="card shadow mb-4">
<div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Users info</h6>
</div>
<div className="card-body">
    <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>الاسم</th>
                    <th>البريد الالكترونى</th>
                    <th>الدور</th>
                    <th>تاريخ الانظمام</th>
                    <th>رقم الهاتف</th>
                    <th>تعديل الحساب </th>
                    <th> </th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>الاسم</th>
                    <th>البريد الالكترونى</th>
                    <th>الدور</th>
                    <th>تاريخ الانظمام</th>
                    <th>رقم الهاتف</th>
                    <th>تعديل الحساب </th>
                </tr>
            </tfoot>
            <tbody>
                {Users.map(u=>(

                    <tr key={u.id}>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>2011/04/25</td>
                    <td>{u.phone}</td>
                    <td><Delete setUsers={setUsers} user={u}/></td>
                </tr>
                )
                    )}
            </tbody>
        </table>
    </div>
</div>
</div>
   


</Fragment>
    )
}
export default Table;