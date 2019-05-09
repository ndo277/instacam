import React from 'react';
import PostOptions from './post_options';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal_actions';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'options':
      component = <PostOptions />;
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
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);