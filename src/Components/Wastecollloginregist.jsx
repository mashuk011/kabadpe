import React, { useState } from "react";
import "../style/LogReg.css";

const Wastecolloginregist = () => {
  const [formBox, setFormBox] = useState(false);
  const [changeText, setChangeText] = useState("Sign Up");
  const [formText, setFormText] = useState("Log In");
  const [thanksText, setThanksText] = useState(false);
  const [forgotPara, setForgotPara] = useState(false);
  const [formComp , setFormComp] = useState(false);

  const sendReuqestfuct = () => {

      setForgotPara(true);

      setTimeout(() => {
          setForgotPara(false);
      }, 5000);
    
  }


  const thanksBtn = () => {
    setThanksText(true);

    setTimeout(() => {
      setThanksText(false);
    }, 6000);
  };

  const toggleForm = () => {
    setFormBox(!formBox);
  };

  const TextContent = () => {
    if (formText === "Log In") {
      setFormText("Request For Registration");
    } else {
      setFormText("Log In");
    }

    if (changeText === "Sign Up") {
      setChangeText("Sign In");
    } else {
      setChangeText("Sign Up");
    }
  };

  return (
    <>
      <section className={ formComp ===  true ? "log-regist-comp maincompactive" : "log-regist-comp"}>
        <div className="log-reg-grid">
          <div className="left-log-reg-form-grid-bx">
            <div className="login-form-bx">
              <div className="login-logo">
                <img src="./images/resources/logo.png" alt="" />
              </div>

              <form
                className={
                  formBox === true
                    ? "log-regst-form registformactive"
                    : "log-regst-form"
                }
                action="#"
              >
                <div className="log-inpt-bx reg-inpt-bx">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="log-inpt-bx reg-inpt-bx">
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="Phone No."
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="log-inpt-bx reg-inpt-bx">
                  <input
                    type="pin"
                    name="pincode"
                    id="pincode"
                    placeholder="Work Area Pincode"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="log-inpt-bx log-inpt-bx-login">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email or Username"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="log-inpt-bx log-inpt-bx-login">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="forgt-passwrd-check-bx-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Please Read "Team & Conditions" for Waste Collectors and
                      Confirm before Clicking the Request Button
                    </label>
                  </div>

                  <p onClick={() => setFormComp(true)} className="forgot-pass-btn">Forgot Password!</p>
                </div>

                <button onClick={() => thanksBtn()} className="form-submit-btn">
                  {formText}
                </button>

                <div className="thanks_para">
                  {thanksText && (
                    <p>
                      Thank You For Your Intertest, Admin will check and Confirm
                      Your Registration, You Will Be Notify On Your Mail/Mobile
                      Number Soon.
                    </p>
                  )}
                </div>

                <div className="switch-form-btn">
                  <p>New to Kabadpe? </p>
                  <button
                    onClick={() => {
                      toggleForm(), TextContent();
                    }}
                  >
                    {changeText}!
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="right-forgot-password-form-bx ">
            <div className="login-form-bx">
              <div className="login-logo">
                <img src="./images/resources/logo.png" alt="" />
              </div>

              <form action="#">
                <div className="log-inpt-bx log-forgot-passwrd-inpt-bx">
                  <input
                    type="text"
                    name="mobemail"
                    id="mobemail"
                    placeholder="Mobile No./Email Id"
                    autoComplete="off"
                    required
                  />
                </div>

               

                <button onClick={() => sendReuqestfuct()} className="form-submit-btn forgot-passwrd-btn-send-rquest">
                  Send Request
                </button>

                <div className="forgot-text">
                  {forgotPara && (
                    <p>
                      Password Reset Link Has Been Sent To Your Register Email
                      and Mobile!
                    </p>
                  )}
                </div>

                <div className="switch-form-btn">
                  <p>New to Kabadpe? </p>
                  <p onClick={() => setFormComp(false)} >Log In</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wastecolloginregist;
