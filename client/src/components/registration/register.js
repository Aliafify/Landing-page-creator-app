import React, { Fragment } from 'react'
import './register.css'
import serializeForm from 'form-serialize';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerState: "" 
    }
  }

  /* handle submite */
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const url = values.username;
    const date = new Date();
    const totDate = `${date.getFullYear()}/ ${date.getMonth()} /${date.getDate()}`
    const newUser = {
      ...values,
      role: "user",
      open: false,
      url: url,
      date: totDate,
      clicks: 0,
      adsId:"",
      sendTo:"",
      style: { backgroundColor: "#fff", background: "/uploads/React-Blogs.png", titleColor: "#333333", titleSize: "40px", disColor: "#333333", disSize: "19", product: "https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-beauty-cosmetics-product-design-png-image_3350331.jpg", wh: "none", ph: "inline-block" },
      content: { title: "العنوان.......", discription: "ادخل محتوى الصفحة هنا....", whatsapp: [values.phone], logo: "https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-beauty-cosmetics-product-design-png-image_3350331.jpg" }
    }
    if (values.password === values.password2) {

      fetch("/create", {
        method: "post",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      }).then(async (response) => {
        const statu = response.status;
        if (statu === 200) {
          const res = await response.json()
          await this.props.setUser(res);
          await this.props.setAuth(true);
        }
        else {
          this.setState({ registerState: "* this email has an acconut" });
        }

      });

    }
    else if (values.password !== values.password2) {
      this.setState({ registerState: "* password not matched" })
    }

  }
  render() {
    return (
      <Fragment>

        <form onSubmit={this.handleSubmit}>
          <div id="login-box">
            <div className="left">
              <h1>Sign up</h1>
              <small style={{ color: "red" }}>{this.state.registerState}</small>
              <input type="text" name="username" placeholder="Username" required></input>
              <input type="text" name="email" placeholder="E-mail" required />

              <input type="tel" id="phone" name="phone" placeholder='phone' required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="password2" placeholder="Retype password" required />

              <button>
                submit
              </button>
            </div>

            <div className="right">
              <span className="loginwith">Sign in with<br />social network</span>

              <button className="social-signin facebook">Log in with facebook</button>
              <button className="social-signin twitter">Log in with Twitter</button>
              <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
          </div>

        </form>

      </Fragment>
    );
  }
}

export default Registration;