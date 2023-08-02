import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { registerAction } from "../../Redux/action/registerAction";
import { Link, useNavigate } from "react-router-dom";

const Registeration = () => {
  let array = [];
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const details = useSelector((state) => state);
  // console.log(details, "detailssssaaaa");

  const onSubmit = (values) => {
    dispatch(registerAction(values));

    navigate("/login");

    // console.log(values, "initialValues");
    // if (values) {
    //   let data = localStorage.getItem("items");
    //   if (data) {
    //     let details = JSON.parse(data);
    //     // Check if email already exists
    //     const existEmail = details.find((item) => item.Email === values.Email);
    //     if (existEmail) {
    //       alert("Email already exists!");
    //       return;
    //     }
    //     details.push(values);
    //     localStorage.setItem("items", JSON.stringify(details));
    //     JSON.parse(localStorage.getItem("item"));
    //   } else {
    //     localStorage.setItem("items", JSON.stringify([values]));
    //   }
    // }
    // alert("Saved");
  };

  const validate = (values) => {
    const errors = {};
    //   if (!values.Name) {
    //     errors.Name = "Please enter a valid name";
    //   }
    //   if (!values.Email) {
    //     errors.Email = "Please enter a valid email";
    //   }
    if (!values.password) {
      errors.password = "Please enter a valid Password";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Please Confirm your password";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Must match";
    }
    return errors;
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const goToClick = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="main_page">
        <Row>
          <Col md={4} className="signup">
            <div className="left_content">
              <h2>Looks Like You're new here!</h2>
              <p>sign up with your mobile number to get started</p>
              <img src="/image/pngwing.com.png" />
            </div>
          </Col>
          <Col md={8}>
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
                    <Field name="username">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Your name</label> */}
                          <input
                            className="login_input"
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
                    <Field name="email">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Email</label> */}
                          <input
                            className="login_input"
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
                            <p className="star">{meta.error}</p>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="confirmpassword">
                      {({ input, meta }) => (
                        <div className="mb-4">
                          {/* <label>Confirm</label> */}
                          <input
                            className="login_input"
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
                      <button className="des-but" type="submit ">
                        Continue
                      </button>
                      <Link className="reset_button" to="/login">
                        Already have an Account
                      </Link>
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
