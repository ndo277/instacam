import React from 'react';
import PostOptions from './post_options';
import {connect} from 'react-redux';
import {updatePost, deletePost} from '../actions/post_actions';
import {closeModal} from '../actions/modal_actions';
import EditPost from './edit_post';

const Modal = ({modal, closeModal, deletePost, editPost}) => {
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
                  closeModal={closeModal} />;
      break;
    case 'edit':
      component = <EditPost
                  post={modal.post.data}
                  updatePost={updatePost}
                  closeModal={closeModal} />;
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
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deletePost: (id) => dispatch(deletePost(id)),
    updatePost: (post) => dispatch(updatePost(post))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);