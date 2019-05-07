import { connect } from 'react-redux';
import { createPost } from '../actions/post_actions';
import PostForm from './post_form';

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data))
});

export default connect(null, mapDispatchToProps)(PostForm);
