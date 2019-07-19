import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/postActions';

function Post(props) {
  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push('/');
  };
  const post = !props.post ? (
    <div className="center">Loading post...</div>
  ) : (
    <div className="post">
      <h4 className="center">{props.post.title}</h4>
      <p>{props.post.body}</p>
      <div className="center">
        <button onClick={handleClick} className="btn grey">
          Delete Post
        </button>
      </div>
    </div>
  );
  return <div className="container">{post}</div>;
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === Number(id))
  };
};

const mapDispatchToprops = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Post);
