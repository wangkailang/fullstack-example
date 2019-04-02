import React from 'react';
import { Formik, Field } from 'formik';
import { Mutation } from 'react-apollo';
import { Button, Row, Col, Form, Alert } from 'react-bootstrap';
import SIGNUP from '../../gqls/signup';
import { AUTH_TOKEN } from '../../constants';
import './style.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
}

class SignupPage extends React.PureComponent {
  handleSubmit = signup => {
    return values => {}
  }
  confirm = async data => {
    const token = data.signup.token;
    this.props.refreshToken({
      [AUTH_TOKEN]: token,
    });
    this.props.history.replace('/');
  }
  render() {
    return (
     <div className="SignupPage">
      <div className="SignupPage__form">
        <Mutation
          mutation={SIGNUP}
          onCompleted={this.confirm}
        >
          {(signup, { error }) => (
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(false);
                await signup({
                  variables: {
                    input: values
                  }
                });
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  {error && (
                    <Alert variant="danger">
                      {error.message}
                    </Alert>
                  )}
                  <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="2">Name:</Form.Label>
                    <Col sm="10">
                      <Field className="form-control" type="name" name="name" placeholder="Name" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="email">
                    <Form.Label column sm="2">Email:</Form.Label>
                    <Col sm="10">
                      <Field className="form-control" type="email" name="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="password">
                    <Form.Label column sm="2">Password:</Form.Label>
                    <Col sm="10">
                      <Field className="form-control" type="password" name="password" placeholder="Password" />
                    </Col>
                  </Form.Group>
                  <div className="SignupPage__btn">
                      <Button type="submit" disabled={isSubmitting}>
                      Signup
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </Mutation>
      </div>
     </div>
    )
  }
}

export default SignupPage;