import { Form, Formik } from "formik";
import React, { useState } from "react";
import { resetpasswordValidation } from "../validators/user/resetPasswordValidator";
import { userResetPassword } from "../apis/user";

const PrfPasswrd = () => {
  const [apiErrors, setApiErrors] = useState({});
  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };
  const handleSubmit = async (data, { resetForm }) => {
    setApiErrors({ ...apiErrors, resetPassword: "" });
    const action = await userResetPassword(data);
    if (action?.error) {
      setApiErrors({ ...apiErrors, resetPassword: action?.message });
      return;
    }
    resetForm();
  };
  const [formBox, setFormBox] = useState(false);
  const [showhide, setShowhide] = useState("fa-plus");

  const showHide = () => {
    setFormBox(!formBox);

    if (showhide === "fa-plus") {
      setShowhide("fa-minus");
    } else {
      setShowhide("fa-plus");
    }
  };

  return (
    <>
      <section className="prof-passwrd-comp">
        <div className="prf-passwrd-form">
          <div className="comn-top-flex-bx">
            <h5>Password</h5>

            <button onClick={showHide} className="show-hide">
              <i className={`fa-solid ${showhide}`}></i>
            </button>
          </div>

          <div
            className={formBox ? " formboxx active" : "form-boxx"}
            style={{ marginTop: "2rem" }}
          >
            <Formik
              validationSchema={resetpasswordValidation}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({
                handleBlur,
                handleChange,
                values,
                errors,
                touched,
                ...rest
              }) => (
                <Form>
                  <div className="prf-passwrd-bx">
                    <input
                      type="text"
                      name="newPassword"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.newPassword}
                    />
                    {touched.newPassword && errors.newPassword ? (
                      <div style={{ color: "red" }}>{errors.newPassword}</div>
                    ) : null}
                  </div>

                  <div className="prf-passwrd-bx">
                    <input
                      type="text"
                      name="confirmNewPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmNewPassword}
                    />
                    {touched.confirmNewPassword && errors.confirmNewPassword ? (
                      <div style={{ color: "red" }}>
                        {errors.confirmNewPassword}
                      </div>
                    ) : null}
                  </div>
                  {apiErrors.resetPassword ? (
                    <div style={{ color: "red" }}>
                      {apiErrors.resetPassword}
                    </div>
                  ) : null}
                  <button type="submit" className="prf-passwrd-btn">
                    Save
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrfPasswrd;
