import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const GET_USERS = gql`{
  users {
    id
    name
  }
}`;
const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      name
      email,
    }
  }
`;
const DELETE_USER = gql`
  mutation DeleteUser($where: UserWhereUniqueInput!) {
    deleteUser(where: $where) {
      id
    }
  }
`;

class UsersTable extends React.Component {
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

  render() {  
    return (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
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
                  {data.users.map(({ id, name }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        <Mutation
                          mutation={DELETE_USER}
                          update={(cache, { data: { deleteUser } }) => {
                            const { users } = cache.readQuery({ query:  GET_USERS});
                            cache.writeQuery({
                              query: GET_USERS,
                              data: { users: users.filter(user => user.id !== deleteUser.id) }
                            })
                          }}
                        >
                          {deleteUser => (
                            <Button
                              variant="danger"
                              onClick={async () => {
                                deleteUser({
                                  variables: {
                                    where: { id }
                                  }
                                })
                              }}
                            >Delete</Button>
                          )}
                        </Mutation>
                      </td>
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
                  <Mutation
                    mutation={CREATE_USER}
                    update={(cache, { data: { createUser } }) => {
                      const { users } = cache.readQuery({ query:  GET_USERS});
                      cache.writeQuery({
                        query: GET_USERS,
                        data: { users: users.concat([createUser]) }
                      })
                    }}
                  >
                    {(createUser) =>(
                      <Form validated onSubmit={async event => {
                        event.preventDefault();
                        event.stopPropagation();
                        await createUser({
                          variables: {
                            data: {
                              name: this.state.name
                            }
                          }
                        })
                        this.handleClose();
                      }}>
                        <Form.Group as={Row} controlId="user">
                          <Form.Label column sm="2">Name:</Form.Label>
                          <Col sm="10">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your name"
                              onChange={this.handleNameChange}
                            />
                          </Col>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                          </Form.Control.Feedback>
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
                    )}
                  </Mutation>
                </Modal.Body>
              </Modal>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default UsersTable;
