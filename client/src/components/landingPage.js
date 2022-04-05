import React, { Fragment, useEffect } from "react";
import './landing1.css'
import whatsapp from './assets/imgs/whatsapp.gif'
import Phone from './assets/imgs/phone.png'
import MetaTags from 'react-meta-tags';
import Buttonlink from "./user/link";
import Ads from "./googleads";
import { useParams } from "react-router-dom";
const Lpage = (props) => {
    const params=useParams();
    console.log(params);
    const { user } = props;

    const [style, content, phone] = [user.style, user.content, user.phone];
    const whLink = `https://api.whatsapp.com/send/?phone=%2B${content.whatsapp}&text&app_absent=0`
    const phoneLink=`tel:${phone}`
    useEffect(() => {

    }, [user])
    const handlechange = () => {
        try {
            const stateProperty = 'clicks'
            const value = user.clicks + 1;
            const id = user.id
            fetch('/editUser',
                {
                    method: "post",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ stateProperty, value, id })
                }
            )
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <Fragment>
            <Ads adsId={user.adsId} id={user.id} sendTo={user.sendTo} />
            <MetaTags>
                <title>My Service</title>
                {/* الاحالة */}
                {/* <--jjj --> */}
                <meta id="meta-description" name="description" content="Some description." />
                <meta id="og-title" property="og:title" content="MyApp" />
                <meta id="og-image" property="og:image" content="path/to/image.jpg" />

            </MetaTags>

            <div className="bg banner-full" style={{ backgroundImage: `url(${style.background})` }} >
                <div className="padding">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-4 justify-content-xs-center ">
                                <div className="image" data-aos="flip-right">
                                    <img className="img-fluid" src={style.product}></img>
                                </div>
                            </div>
                            <div className="col-lg-8 align-self-center "  >
                                <div className="block ">
                                    <div className="logo  ">
                                        <img className="logo l " src={content.logo} alt="logo"></img>
                                    </div>
                                    <h1 className="rtl" style={{ color: style.titleColor, fontSize: `${style.titleSize}px` }}>{content.title}</h1>
                                    <p className="rtl" style={{ color: style.disColor, fontSize: `${style.disSize}px` }}>
                                        {content.discription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contscts">

                        <Buttonlink handlechange={handlechange} link={whLink} name="whatsapp" icon={whatsapp} display={style.wh} />
                        <Buttonlink handlechange={handlechange} link={phoneLink} name="call us" icon={Phone} display={style.ph} />

                    </div>
                </div>
                <div className="footer">
                    Developed By :<a href="https://www.linkedin.com/in/ali-ahmed-882561193/">Ali Afify</a>@ 2022.

                </div>
            </div>

        </Fragment>
    );
}
export default Lpage;