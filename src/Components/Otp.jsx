import React from 'react'
import "../style/LogReg.css";

const Otp = () => {
   
  return (
    <>
      <section className="reset-passwrd-comp">
        <div className="reset-passwrd-grid">

            <div className="left-reset-passwrd-grid-bx">

            <div className="login-form-bx">
              <div className="login-logo login-logo2">
                <img src="./images/resources/logo.png" alt="" />
              </div>

              <form action="#">
              

              

                <div className="log-inpt-bx reset-psswrd-inpt otp-inpt-bx">
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    placeholder="Type your OTP"
                    autoComplete="off"
                    required
                  />
                </div>

              
                <button className="form-submit-btn reset-psswrd-btn">
                Verify OTP
                </button>

              

               
              </form>
            </div>
                
            </div>

            <div className="right-reset-passwrd-grid-bx"></div>
            
        </div>
      </section>
    </>
  )
}

export default Otp
