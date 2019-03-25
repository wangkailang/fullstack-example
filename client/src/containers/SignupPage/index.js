import React from 'react';
import { Formik, Field } from 'formik';
import { Mutation } from 'react-apollo';
import { Button, Row, Col, Form } from 'react-bootstrap';
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
    localStorage.setItem(AUTH_TOKEN, token);
    this.props.refreshToken({
      [AUTH_TOKEN]: data,
    });
    this.props.history.replace('/')
    window.location.reload();
  }
  render() {
    return (
     <div className="SignupPage">
      <div className="SignupPage__form">
        <Mutation
          mutation={SIGNUP}
          onCompleted={this.confirm}
        >
          {(signup) => (
            <Formik
              initialValues={initialValues}
              onSubmit={values => {
                signup({
                  variables: {
                    input: values
                  }
                })
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
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
                      <Button type="submit" disabled={isSubmitting || false}>
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