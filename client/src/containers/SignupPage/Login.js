import React from 'react';
import { Formik, Field } from 'formik';
import { Mutation } from 'react-apollo';
import { Button, Row, Col, Form, Alert } from 'react-bootstrap';
import { LOGIN } from '../../gqls/signup';
import { AUTH_TOKEN } from '../../constants';
import { Link } from 'react-router-dom';
import './style.css';

const initialValues = {
  email: '',
  password: '',
}

class LoginPage extends React.PureComponent {
  confirm = async data => {
    const token = data.login.token;
    this.props.refreshToken({
      [AUTH_TOKEN]: token,
    });
    this.props.history.replace('/');
    // window.location.reload();
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__form">
          <Mutation
            mutation={LOGIN}
            onCompleted={this.confirm}
          >
            {(login, { error }) => (
              <Formik
                initialValues={initialValues}
                onSubmit={async (values, { setSubmitting }) => {
                  const datas = await login({
                    variables: {
                      input: values
                    }
                  });
                  console.log('datas', datas);
                  setSubmitting(false);
                }}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    {error && (
                      <Alert variant="danger">
                        {error.message}
                      </Alert>
                    )}
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
                    <div className="LoginPage__btn">
                      <Button type="submit" disabled={isSubmitting}>
                        Login
                      </Button>
                    </div>
                    <div>
                      <Link to="/signup">need to create an account?</Link>
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

export default LoginPage;