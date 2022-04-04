import React, { Fragment, useEffect, useState } from "react";
const Delete = (props) => {

    const user = props.user;
    const id = user.id;
    const open = user.open;
    const newOpen = open ? false : true;
    const deleteAccount = (e) => {

        try {
            const data = { id: id }

            fetch("/del", {
                method: "post",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then(async (response) => {
                const res = await response.json();
                props.setUsers(res);
            })
        } catch (err) {
            console.log("problem");
        }
    }
    const edit = (ID, p, v) => {
        try {
            const stateProperty = p;
            const id = ID
            const value = v;
            fetch("/editUser", {
                method: "post",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ stateProperty, value, id })
            }).then(async (response) => {
                const res = await response.json();
                props.setUsers(res);
                console.log(res)
            });

        } catch (err) {
            console.log("Server-problem");
        }
    }
    return (
        <Fragment>

            <div className="dropdown no-arrow mb-4">
                <button className="btn .btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    حذف الحساب
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                    <input type="button" className="dropdown-item" name={props.id} value="حذف" onClick={event => deleteAccount(event.target.name)} />
                    <input type="button" className="dropdown-item" name={id} value={open ? ("حظر") : ("تنشيط")} onClick={event => edit(event.target.name, "open", newOpen)} />

                </div>
            </div>



        </Fragment>
    )
}
export default Delete;