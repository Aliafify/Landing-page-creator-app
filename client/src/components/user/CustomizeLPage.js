import React, { Fragment, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Context from '../context/context';
import Upload from '../upload';
import './customiz.css';


function CustomizeLandingPage() {
    const { user, property } = useContext(Context);
    const [userstate, setUser] = user;
    const id = userstate.id;
    const [stateProperty, setProperty] = property;
    console.log(stateProperty);
    const [value, setValue] = useState(null);
    console.log(value);

    const onChange = (e) => {

        setProperty(e.target.name);
        setValue(e.target.value)
    }
    const handlechange = () => {
        try {

            fetch('/editUser',
                {
                    method: "post",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ stateProperty, value, id })
                }
            ).then(async (res) => {
                const user = await res.json();
                setUser(user)


            })
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <Fragment>
            <div>
                <div className='sidenav edit-nav' >
                    <div>
                        <h5 className="section-header">عنوان الصفحة</h5>
                        <textarea rows="3" cols="60"
                            name="title"
                            placeholder='...عنوان الصفحة'
                            className="ltitle form-control"
                            onChange={(event) => onChange(event)}>
                        </textarea>
                        <input className='save' value={"save"} type="button" name="save" placeholder="save"
                            onClick={handlechange}></input>
                        <div className="property">
                            <span> لون الخط</span>
                            <input className="color" type="color"
                                name="titleColor"
                                placeholder="لون خط العنوان"
                                onChange={(event) => onChange(event)}

                                required></input>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>

                        <div className="property">

                            <span>  حجم الخط</span>
                            <input className="size" type="number"
                                name="titleSize"
                                onChange={(event) => onChange(event)}
                                required></input>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='section-header'>محتوى الصفحة</h5>
                        <textarea rows="5" cols="60"
                            name="discription"
                            placeholder='...ادخل محتوى الصفحة'
                            className=" form-control"
                            onChange={(event) => onChange(event)}>

                        </textarea>
                        <input className='save' value={"save"} type="button" name="save" placeholder="save"
                            onClick={handlechange}></input>
                        <div className="property">

                            <span> لون الخط</span>
                            <input className="color" type="color"
                                name="disColor"
                                placeholder="لون خط الوصف"
                                onChange={(event) => onChange(event)}

                                required></input>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>

                        <div className="property">

                            <span>  حجم الخط</span>
                            <input className="size" type="number"
                                name="disSize"
                                onChange={(event) => onChange(event)}
                                required></input>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>


                    </div>
                    <hr></hr>
                    <div>
                        <h5 className="section-header">الخلفية</h5>
                        <Upload property="background" />
                    </div>
                    <hr></hr>
                    <div>
                        <h6 className="section-header">LOGO - الشعار</h6>
                        <Upload property="logo" />
                    </div>
                    <div>
                        <hr></hr>
                        <h5 className="section-header">whatsapp</h5>
                        <div className="property">


                            <select name="wh" onChange={(event) => onChange(event)} >
                                <option value="inline-block">تفعيل </option>
                                <option value="none">حذف</option>

                            </select>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>
                        <div className="property">
                            <input className="whats-app" type="text"
                                name="whatsapp"
                                onChange={(event) => onChange(event)}

                                required></input>
                            <span> + </span>
                            <input className='save' value={"save"} type="button" name="save" placeholder="save"
                                onClick={handlechange}></input>
                        </div>


                    </div>
                    <hr></hr>
                    <div className="property">

                         
                    <h6>phone</h6>
                        <select name="ph" onChange={(event) => onChange(event)} >
                            <option value="inline-block">تفعيل </option>
                            <option value="none">حذف</option>

                        </select>
                        <input className='save' value={"save"} type="button" name="save" placeholder="save"
                            onClick={handlechange}></input>

                    </div>

                </div>
                <Outlet />
            </div>
        </Fragment>
    )
}
export default CustomizeLandingPage;