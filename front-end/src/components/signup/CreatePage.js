import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../Redux/action/registerAction";

const Registeration = () => {
  let array = [];

  const dispatch = useDispatch();

  // const details = useSelector((state) => state);
  // console.log(details, "detailssssaaaa");
    
  const registerData = {
    username: "amit",
    email: "abc@gmail.com",
    password: "abc1234",
  };
  useEffect(() => {
    dispatch(registerAction(registerData));
  }, []);
  const onSubmit = (values) => {
    if (values) {
      let data = localStorage.getItem("items");
      if (data) {
        let details = JSON.parse(data);
        // Check if email already exists
        const existEmail = details.find((item) => item.Email === values.Email);
        if (existEmail) {
          alert("Email already exists!");
          return;
        }
        details.push(values);
        localStorage.setItem("items", JSON.stringify(details));
        JSON.parse(localStorage.getItem("item"));
      } else {
        localStorage.setItem("items", JSON.stringify([values]));
      }
    }
    alert("Saved");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Please enter a valid name";
    }
    if (!values.Email) {
      errors.Email = "Please enter a valid email";
    }
    if (!values.Password) {
      errors.Password = "Please enter a valid Password";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Please Confirm your password";
    } else if (values.confirmpassword !== values.Password) {
      errors.confirmpassword = "Must match";
    }
    return errors;
  };
  const initialValues = {
    Name: "",
    Email: "",
    Password: "",
    confirmpassword: "",
  };

  return (
    <div className="container">
      <div className="main_page">
        <Row>
          <Col md={4} className="signup">
            <div className="left_content" >
              <h2>Looks Like You're new here!</h2>
              <p>sign up with your mobile number to get started</p>
              <img src="/image/pngwing.com.png" />
            </div>
          </Col>
          <Col md={8}>
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
                    <Field name="Name">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Your name</label> */}
                          <input className="login_input"
                            {...input}
                            type="text"
                            placeholder="First and last name"
                          />
                          {meta.error && meta.touched && (
                            <p className="star">{meta.error}</p>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="Email">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Email</label> */}
                          <input className="login_input"
                            {...input}
                            type="email"
                            placeholder="Email"
                          />
                          {meta.error && meta.touched && (
                            <p className="star">{meta.error}</p>
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
                            <p className="star">{meta.error}</p>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="confirmpassword">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Confirm</label> */}
                          <input className="login_input"
                            {...input}
                            type="password"
                            placeholder="Confirm Password"

                          />
                          {meta.error && meta.touched && (
                            <p className="star">{meta.error}</p>
                          )}
                        </div>
                      )}
                    </Field>
                    <div className="button_div ">
                      <button className="des-but" type="submit ">Continue</button>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Registeration;
