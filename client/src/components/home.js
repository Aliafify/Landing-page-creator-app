import React, { Fragment, useEffect, useState } from "react"
import "./assets/vendors/themify-icons/css/themify-icons.css"
import "./assets/css/rubic.css"
import Tower from './assets/imgs/eiffel-tower.svg';
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate();
    const handelClick = () => {
        navigate("/log-in");
    };
    const [policy,setPolicy]=useState("")
    const webSiteTitle = "Landing Page Creator";
    const discription = "صمم صفحة احترافية لشركتك أو مجال عملك من أجل جميع أنواع الاعلانات";
    const subDiscripton = "مدعمه بالسي يو وبها كل وسائل الاتصال بك بالاضافة لكل الروابط الخاصة بنشاطك مع حماية من النقرات الوهمية        "
    const profesionalPrice = "30"
    useEffect(() => {
        fetch('/home').then(res =>
            res.json()    
        ).then(data=>{setPolicy(data.policy)
        console.log(data)
        })
        //   .then(data => setPolicy(data));
    
      }, [policy])
      
    return (
        <div>
            <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">


                <header className="header d-flex justify-content-center">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-7">
                                <div className="header-content">
                                    <h3 className="header-title"><strong className="text-primary">{webSiteTitle}</strong><span>-LPC</span></h3>
                                    <h4 className="header-subtitle"> {discription} </h4>
                                    <p>{subDiscripton}</p>
                                    <input onClick={() => { handelClick() }} type="button" className="btn btn-outline-light btn-flat" value="بدأ التجربة"></input>
                                </div>
                            </div>
                            <div className="col-md-5 d-none d-md-block">
                               
                            </div>
                        </div>
                    </div>
                </header>
                <div className="social-wrapper" id="features">
                    <div className="container">
                        <div className="social-txt">
                            <h6 className="title" id="whous">نبذة عنا</h6>
                            <p className="subtitle">
                                نقدم لك خدمة فريدة حصرية لك و لشركتك و مجالاتك الكثيرة المختلفة, نمكنك من انشاء صفحة تجمع لك جميع الروابط الخاصة بك في مكان واحد بأحدث الأساليب العالمية من سرعة أرشفة و نتائج بحث لا مثيل لها كمواقع التواصل الإجتماعي , خرائط جوجل , الأتصال المباشر و غيرها
                            </p>
                        </div>
                        <div className="social-links">
                            <a href="#" className="link"><i className="ti-facebook"></i></a>
                            <a href="#" className="link"><i className="ti-twitter-alt"></i></a>
                            <a href="#" className="link"><i className="ti-google"></i></a>
                            <a href="#" className="link"><i className="ti-pinterest-alt"></i></a>
                            <a href="#" className="link"><i className="ti-instagram"></i></a>
                            <a href="#" className="link"><i className="ti-rss"></i></a>
                        </div>
                    </div>
                </div>

                <section className="section black">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-5 align-self-center mb-4 mb-md-0">
                                <img src={Tower} alt="" className="shadow w-100">
                                </img>
                            </div>
                            <div className="col-md-6 col-lg-5 steps">
                                <h6 className="title" id="work">
                                    كيفية الأستخدام
                                </h6>
                                <p>
                                    هذا كل ما سوف تريدة للبدء
                                </p>
                                <ul className="list-unstyled mt-4">
                                    <li className="media">
                                        <div className="circle-40 mr-3 mt-1"><i className="ti-gift"></i></div>
                                        <div className="media-body">
                                            <h6 className="mb-2">
                                                تجهيز بياناتك العامة                                </h6>
                                            <p>
                                                من الأسم كامل مع بريد إلكتروني و رقم هاتف صالح
                                            </p>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="circle-40 mr-3 mt-1"><i className="ti-face-smile"></i></div>
                                        <div className="media-body">
                                            <h6 className="mb-2">تجهيز بيانات الصفحة</h6>
                                            <p>من شعار الخدمة التى تقوم بترويجها او شركتك و تفاصيل عنها بأختيار الكلمات المناسبة</p>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="circle-40 mr-3 mt-1"><i className="ti-microphone"></i></div>
                                        <div className="media-body">
                                            <h6 className="mb-2">إعداد الصفحة و التهيئة</h6>
                                            <p>يمكنك التحكم في شكل الصفحة من صورة خلفية و اشكال الأزرار و الأيقونات المناسبة مع كل رابط</p>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="circle-40 mr-3 mt-1"><i className="ti-microphone"></i></div>
                                        <div className="media-body">
                                            <h6 className="mb-2">
                                                إعدادات الأرشفة بجوجل
                                            </h6>
                                            <p>
                                                يمكنك اضافة الأرشفة الخاصة بجوجل لظهور اسرع و خدمة الإحالات الناجحة مع النقرات
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section">
    <div className="container">
        <div className="row justify-content-between">               
            <div className="col-md-6 col-lg-5 align-self-center">
                <h6 className="title">Standard Picture Section</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ut voluptatum ipsum. Rerum fuga cumque illo nihil nobis vero ducimus, animi voluptatum nemo facilis quae quia odit accusantium doloremque? Totam.</p>
                <p><strong>Adipisicing elit. Quos ad doloribus numquam cum odio dolorem!</strong></p>
                <p>Rerum fuga cumque consectetur adipisicing elit. Pariatur quis ipsum facere officiis magni ullam quasi fuga magnam dicta quas.</p>                    
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
                <img src={Avatar} alt="" className="shadow w-100">
                </img>
            </div>
        </div>
    </div>
</section> */}
                <section className="section " id="about">
                    <div className="container text-center " >
                        <h6 className="display-4 has-line" id="service">
                            الخدمة المقدمة
                        </h6>
                        <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className="row ">
                            <div className="col-lg-4">
                                <div className="circle-100 mb-3"><i className="ti-light-bulb"></i></div>
                                <h6 className="title mb-3"> التخطيط و المتابعة </h6>
                                <p>

                                    لقد اهتمينا بكل التفاصيل الصغيرة التى تساعدك على نجاحك و تحقيق اقصي عائد استفادة من خدماتنا
                                    كإضافات لا يوجد احد ينافسنا بها كخدمة الأرشفة و الإحالات الناجحة و النقرات و لوحة تحكم كاملة تمكنك من إنشاء و متابعة كل شئ خاص بصفحتك و الكثير
                                </p>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="circle-100 mb-3"><i className="ti-paint-bucket"></i></div>
                                <h6 className="title mb-3 ">تصميمات عصرية جذابة</h6>
                                <p >
                                    كما اهتممنا بأدق التفاصيل التى تساعد على جذب الأنتباه لك و لشركتك في تعديل اشكال الأزرار و الأيقونات ايضا و خلفيات كثيرة , يمكن الأستعانة بأشياء خاصة مثل لوجو الخدمة ام الشركة و تعديل شكل الصفحة كاملاً على ذوقك الخاص بالأضافة الى ان الصفحة النهائية ستكون متناسقة على جميع الشاشات اللوحية                     </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="circle-100 mb-3"><i className="ti-marker-alt"></i></div>
                                <h6 className="title mb-3 ">خدمات صناع المحتوي</h6>
                                <p>
                                    هذة المميزات ستساعدك كثيرا في انشاء صفحة لك تشمل كل الروابط الفرعية و الأساسية بالمحتوي الخاص بك و يمكن نشرة بسهولة مع خدمات بحث رائجة و قوية , كما يوجد خطة اسعار تساعدك في الأحالات الناجحة المقدمة من جوجل بسعر رمزي و تساعدك في تطوير و نشر اسرع                     </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="pricing">
                    <div className="container text-center">
                        <h6 className="display-4 has-line black" id="prices">الخطط والاسعار</h6>
                        <p className="mb-5 pb-4 black">
                            الخطط و الاشتراكات
                        </p>
                        <div className="row pt-5">
                            <div className="col-lg-4">
                                <a onClick={() => { handelClick() }} className="pricing-card">
                                    <div className="head">التقليدية</div>
                                    <div className="body">
                                        <h1><small>$</small>0</h1>
                                        <p>Free for Life</p>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">دعم فني خلال 24 ساعة يومياً</li>
                                        <li className="list-group-item">تحكم كامل بالصفحة الشخصية</li>
                                        <li className="list-group-item">الأحالات الناجحة و التتبع المباشر</li>
                                        <li className="list-group-item">أرشفة الصفحة بسرعة فائقة</li>
                                        <li className="list-group-item">بدون ظهور أعلانات</li>
                                        <li className="list-group-item">خصومات تصل الي 50% من الخطط</li>
                                        <li className="list-group-item">دعم فني لخدمة ما بعد البيع</li>
                                        <li className="list-group-item">خدمات صانعي المحتوي</li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <div onClick={() => { handelClick() }} className="pricing-card popular">
                                    <div className="head">الأكثر مبيعا</div>
                                    <div className="body">
                                        <h1><small>$</small>{profesionalPrice} </h1>
                                        <p>شهر</p>
                                    </div>
                                    <div className="popular-item">OUR MOST POPULAR</div>
                                    <ul className="list-group">
                                        <li className="list-group-item">دعم فني خلال 24 ساعة يومياً</li>
                                        <li className="list-group-item">تحكم كامل بالصفحة الشخصية</li>
                                        <li className="list-group-item">الأحالات الناجحة و التتبع المباشر</li>
                                        <li className="list-group-item">أرشفة الصفحة بسرعة فائقة</li>
                                        <li className="list-group-item">بدون ظهور أعلانات</li>
                                        <li className="list-group-item">خصومات تصل الي 50% من الخطط</li>
                                        <li className="list-group-item">دعم فني لخدمة ما بعد البيع</li>
                                        <li className="list-group-item">خدمات صانعي المحتوي</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <a className="pricing-card">
                                    <div className="head">الرعاة</div>
                                    <div className="body">
                                        <h1><small>$</small>00</h1>
                                        <p>شهر </p>
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">دعم فني خلال 24 ساعة يومياً</li>
                                        <li className="list-group-item">تحكم كامل بالصفحة الشخصية</li>
                                        <li className="list-group-item">الأحالات الناجحة و التتبع المباشر</li>
                                        <li className="list-group-item">أرشفة الصفحة بسرعة فائقة</li>
                                        <li className="list-group-item">بدون ظهور أعلانات</li>
                                        <li className="list-group-item">خصومات تصل الي 50% من الخطط</li>
                                        <li className="list-group-item">دعم فني لخدمة ما بعد البيع</li>
                                        <li className="list-group-item">خدمات صانعي المحتوي</li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className="section " id="contact">
                    <div className="container text-center">
                        <h6 className="display-4 has-line">اتصل بنا </h6>
                        <p className="mb-5 pb-2">اتصل بنا فى حالة وجود اى مشكلة او استفسار  , خدمة دعم فنى 24 ساعة</p>

                        <form>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="form-group pb-1">
                                        <input type="text" className="form-control" required placeholder="Name">
                                        </input>
                                    </div>
                                    <div className="form-group pb-1">
                                        <input type="email" className="form-control" required placeholder="Email">
                                        </input>
                                    </div>
                                    <div className="form-group ">
                                        <input type="text" className="form-control" placeholder="Subject">
                                        </input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <textarea name="" id="" cols="" rows="7" className="form-control" required placeholder="Message"></textarea>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="ارسال">
                            </input>
                        </form>
                    </div>
                </section>
                <section className="section ">
                <div className="social-txt">
                            <h6 className="title" id="whous">سياسة الخصوصية</h6>
                            <p className="subtitle">
{policy}
                            </p>
                        </div>
                </section>




            </div>
            <div className="footer py-4 bg-dark text-light">
                <div className="container text-center">
                    <p className="mb-4 small">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="#">LPC</a></p>
                    <div className="social-links">
                        <a href="#" className="link"><i className="ti-facebook"></i></a>
                        <a href="#" className="link"><i className="ti-twitter-alt"></i></a>
                        <a href="#" className="link"><i className="ti-google"></i></a>
                        <a href="#" className="link"><i className="ti-pinterest-alt"></i></a>
                        <a href="#" className="link"><i className="ti-instagram"></i></a>
                        <a href="#" className="link"><i className="ti-rss"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Home;