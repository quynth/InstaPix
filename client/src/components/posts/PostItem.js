import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';
import Moment from 'react-moment';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to="/profile">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </Link>
            <br />
            <p className="text-center">{post.name}</p>
            <Moment format="YYYY-MM-DD HH:mm:ss">{post.date}</Moment>
          </div>
          <div className="col-md-10">
            <div
              className="post-content"
              style={{
                maxHeight: '300px',
                overflowY: 'auto',
              }}
            >
              <p className="lead">{post.text}</p>
              <img src={post.url} width="250" height="350" alt="Post" />
            </div>

            {showActions ? (
              <span>
                <input
                  type="checkbox"
                  onChange={this.onLikeClick.bind(this, post._id)}
                  checked={this.findUserLike(post.likes)}
                  className="btn-check"
                  id={`likeCheckbox_${post._id}`}
                />
                <label
                  className={classnames('btn btn-light mr-1', {
                    'btn-info': this.findUserLike(post.likes),
                  })}
                  htmlFor={`likeCheckbox_${post._id}`}
                >
                  <i className="fas fa-thumbs-up" />
                  <span className="badge badge-light">
                    {post.likes.length}
                  </span>
                </label>
                <input
                  type="checkbox"
                  onChange={this.onUnlikeClick.bind(this, post._id)}
                  checked={!this.findUserLike(post.likes)}
                  className="btn-check"
                  id={`unlikeCheckbox_${post._id}`}
                />
                <label
                  className="btn btn-light mr-1"
                  htmlFor={`unlikeCheckbox_${post._id}`}
                >
                  <i className="fas fa-thumbs-down" />
                </label>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  deletePost,
  addLike,
  removeLike,
})(PostItem);
