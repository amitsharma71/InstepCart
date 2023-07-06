import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Field } from "react-final-form";

const CreateLogin = () => {
  const onSubmit = (values) => {
    console.log(values, "valdddues");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Required";
    }
    if (!values.Mobile_Number) {
      errors.Mobile_Number = "Required";
    }
    if (!values.Email) {
      errors.Email = "Required";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword !== values.Password) {
      errors.confirmpassword = "Must match";
    }
    return errors;
  };
  const initialValues = {
    Name: "",
    Mobile_Number: "",
    Email: "",
    Password: "",
    confirmpassword: "",
  };

  return (
    <div className="container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
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
                        <div>
                          <label>Your name</label>
                          <input
                            {...input}
                            type="text"
                            placeholder="First and last name"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="Mobile_Number">
                      {({ input, meta }) => (
                        <div>
                          <label>Mobile number</label>
                          <input
                            {...input}
                            type="number"
                            placeholder="First and last name"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="Email">
                      {({ input, meta }) => (
                        <div>
                          <label>Email</label>
                          <input
                            {...input}
                            type="text"
                            placeholder="First and last name"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="Password">
                      {({ input, meta }) => (
                        <div>
                          <label>Password</label>
                          <input
                            {...input}
                            type="password"
                            placeholder="Password"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="confirmpassword">
                      {({ input, meta }) => (
                        <div>
                          <label>Confirm</label>
                          <input
                            {...input}
                            type="password"
                            placeholder="Confirm"
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <div className="buttons">
                      <button type="submit">Submit</button>
                      <button
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateLogin;
