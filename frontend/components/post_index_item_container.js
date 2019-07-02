import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import {createLike} from '../actions/like_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  createLike: (data) => dispatch(createLike(data)),
  deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);