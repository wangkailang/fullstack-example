import React from 'react';
import { compose, graphql } from 'react-apollo';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { GET_USERS, CREATE_USER, DELETE_USER } from '../../gqls/users';

const connector = compose(
  graphql(GET_USERS),
  graphql(CREATE_USER, { name: 'createUser' }),
  graphql(DELETE_USER, { name: 'deleteUser' }),
)

class UsersTable extends React.PureComponent {
  state = {
    show: false,
    name: '',
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  handleNameChange  = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await this.props.createUser({
      variables:{
        input: {
          name: this.state.name
        }
      }
    })
    await this.props.data.refetch();
    this.handleClose();
  }
  delete = id => {
    return async () => {
      await this.props.deleteUser({
        variables:{
          id
        }
      })
      await this.props.data.refetch();
    }
  }

  render() {
    const { data: { loading, error, users } } = this.props;
    if (loading) return <p>loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td><Button variant="danger" onClick={this.delete(id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Button onClick={this.handleShow}>Add+</Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="user">
                <Form.Label column sm="2">Name:</Form.Label>
                <Col sm="10">
                  <Form.Control plaintext placeholder="Enter your name" onChange={this.handleNameChange}/>
                </Col>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button type="submit">
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connector(UsersTable);
