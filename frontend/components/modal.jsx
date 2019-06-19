import React from 'react';
import PostOptions from './post_options';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../actions/post_actions';
import {closeModal} from '../actions/modal_actions';
import EditPost from './edit_post';
import UploadAvatarContainer from './upload_avatar_container';
import DeleteComment from './delete_comment';
import {deleteComment} from '../actions/comment_actions';

const Modal = ({modal, closeModal, deletePost, currentUser, deleteComment}) => {
  if (!modal) return null;

  if (!modal.modalType) {
    return null;
  }

  let component;
  switch (modal.modalType) {
    case 'options':
      component = <PostOptions 
                  post={modal.post.data} 
                  deletePost={deletePost} 
                  closeModal={closeModal}
                  currentUser={currentUser} />;
      break;
    case 'edit':
      component = <EditPost
                  post={modal.post.data}
                  updatePost={updatePost}
                  closeModal={closeModal} 
                  deletePost={deletePost} />;
      break;
    case 'pic':
      component = <UploadAvatarContainer 
                   currentUser={currentUser}/>;
      break;
    case 'delete': 
      component = <DeleteComment 
                  deleteComment={deleteComment}
                  comment={modal.post.data}
                  closeModal={closeModal}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deletePost: (id) => dispatch(deletePost(id)),
    updatePost: (post) => dispatch(updatePost(post)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);