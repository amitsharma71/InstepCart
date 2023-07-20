import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Field, Form } from "react-final-form";

const Login = () => {
  const onSubmit = (values) => {
    console.log(values, "valdddues");
  };

  const validate = (values) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = "Please enter a valid Email";
    }
    if (!values.Password) {
      errors.Password = "Please enter a valid Password";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Please Enter a Valid Password";
    } else if (values.confirmpassword !== values.Password) {
      errors.confirmpassword = "Must match";
    }
    return errors;
  };
  const initialValues = {
    Email: "",
    Password: "",
  };

  return (
    <div className="container">

      <Row>
        <Col md={2}>
        </Col>
          <Col md={8} className="main_page">
            <Row>
              <Col md={6} className="signup">
                <div className="left_content" >
                  <h2>Login</h2>
                  <p>Get access to your Orders, Whishlist and Recommendations</p>
                  <img src="/image/pngwing.com.png" />
                </div>
              </Col>
              <Col md={6}>
                <div class="right_content">
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
                        <Field name="Email">
                          {({ input, meta }) => (
                            <div className="mb-4">
                              {/* <label>Email</label> */}
                              <input className="login_input"
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
                        <Field name="Password">
                          {({ input, meta }) => (
                            <div className="mb-4">
                              {/* <label>Password</label> */}
                              <input className="login_input"
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
                          <button className="des-but" type="submit">Continue</button>
                          <button className="reset_button"
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
                <div className="create_accnt" >
                 <a href="#">New to Instepcart? Create an account</a>
                </div>
              </Col>
            </Row>
          </Col>
        <Col md={2}>
        </Col>
      </Row>
    </div>

  );
};

export default Login;
