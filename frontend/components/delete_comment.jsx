import React from 'react';
import {withRouter} from 'react-router';

class DeleteComment extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id)
      .then(() => {location.reload();});
  }

  handleCancel(){
    this.props.closeModal();
  }

  render(){
    return(
      <div className="delete-comment-modal">
        <button onClick={this.handleDelete} className="delete-comment-button">Delete Comment</button>
        <div className="delete-sep"/>
        <button onClick={this.handleCancel} className="delete-cancel-button">Cancel</button>
      </div>
    )
  }

}

export default withRouter(DeleteComment);