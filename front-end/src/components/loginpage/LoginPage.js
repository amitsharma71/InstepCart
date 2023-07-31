import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/action/loginAction";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, res) => {
    dispatch(loginAction(values)).then((response) => {
      Token = response?.payload?.tokenuigiugitygtyigtyi;
      console.log(Token, "fghjhgjhjh");
      localStorage.setItem("token", JSON.stringify(Token));
      window.location.reload();
    });
  };
  const res = useSelector((state) => state?.logindatacheck?.listdata);
  let Token;
  console.log(res, "fghjkjhgfghjkjhgfd");
  const isLoading = useSelector((state) => state?.logindatacheck);
  console.log(isLoading, "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaaa");

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Please enter a valid Email";
    }
    if (!values.password) {
      errors.password = "Please enter a valid Password";
    }
    // if (!values.confirmpassword) {
    //   errors.confirmpassword = "Please Enter a Valid Password";
    // } else if (values.confirmpassword !== values.Password) {
    //   errors.confirmpassword = "Must match";
    // }
    return errors;
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="container">
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="main_page">
          <Row>
            <Col md={6} className="signup">
              <div className="left_content">
                <h2>Login</h2>
                <p>Get access to your Orders, Whishlist and Recommendations</p>
                <img src="/image/pngwing.com.png" />
              </div>
            </Col>
            <Col md={6}>
              <div className="right_content">
                <Form
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                  validate={validate}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Field name="email">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Email</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="text"
                              placeholder="Phone/Email"
                            />
                            {meta.error && meta.touched && (
                              <span className="star">{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="password">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Password</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="password"
                              placeholder="Password"
                            />
                            {meta.error && meta.touched && (
                              <span className="star">{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <div className="button_div">
                        <button className="des-but" type="submit">
                          Continue
                        </button>
                        <button
                          className="reset_button"
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
              <div className="create_accnt">
                <p>
                  New to Instepcart?
                  <Link to="/createlogin">Create an account</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};

export default Login;
