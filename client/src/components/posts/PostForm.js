import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';
import postImage from '../../img/post.png';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      url: '',
      date: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      url: this.state.url,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
            <img
                src={postImage}
                alt="Post"
                style={{
                  width: '100px',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
              />
              <label>Create a post and/or post a picture</label>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Create a post"
          
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />

                <TextAreaFieldGroup
                  placeholder="Post a picture/Please enter a URL"
                  name="url"
                  value={this.state.url}
                  onChange={this.onChange}
                  error={errors.url}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { addPost })(PostForm);
