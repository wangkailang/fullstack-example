import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { GET_POSTS, CREATE_POST, DELETE_POST } from '../../gqls/posts';

class PostsTable extends React.Component {
  state = {
    show: false,
    title: '',
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  handleNameChange  = event => {
    this.setState({
      title: event.target.value
    })
  }

  render() {  
    return (
      <Query query={GET_POSTS}>
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
                    <td>Published</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  {data.posts.map(({ id, title, published }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{published ? '已发布' : '未发布'}</td>
                      <td>
                        <Mutation
                          mutation={DELETE_POST}
                          update={(cache, { data: { deletePost } }) => {
                            const { posts } = cache.readQuery({ query:  GET_POSTS});
                            cache.writeQuery({
                              query: GET_POSTS,
                              data: { posts: posts.filter(post => post.id !== deletePost.id) }
                            })
                          }}
                        >
                          {deletePost => (
                            <Button
                              variant="danger"
                              onClick={async () => {
                                deletePost({
                                  variables: {
                                    id
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
                  <Modal.Title>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Mutation
                    mutation={CREATE_POST}
                    update={(cache, { data: { createPost } }) => {
                      const { posts } = cache.readQuery({ query:  GET_POSTS});
                      createPost.published = false;
                      cache.writeQuery({
                        query: GET_POSTS,
                        data: { posts: posts.concat([createPost]) }
                      })
                    }}
                  >
                    {(createPost) =>(
                      <Form validated onSubmit={async event => {
                        event.preventDefault();
                        event.stopPropagation();
                        await createPost({
                          variables: {
                            input: {
                              title: this.state.title,
                              published: false,
                            }
                          }
                        })
                        this.handleClose();
                      }}>
                        <Form.Group as={Row} controlId="post">
                          <Form.Label column sm="2">Title:</Form.Label>
                          <Col sm="10">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter title"
                              onChange={this.handleNameChange}
                            />
                          </Col>
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid title.
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

export default PostsTable;
