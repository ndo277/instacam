import React from 'react';
import { withRouter } from 'react-router';
import { openModal } from '../actions/modal_actions';

class CommentItem extends React.Component {
  constructor(props){
    super(props);


    this.openModal = this.openModal.bind(this);

  }

  componentDidMount(){
    this.props.fetchComment(this.props.comment.id);
  }

  openModal(){
    dispatch(openModal('delete'));
  }

  render(){
    let comment = this.props.comment;
    if (!comment) return null;
    return(
      <div className="comment-item">
        <img onClick={() => this.props.history.push(`/users/${comment.user_id}`)} className="profile-pic" src={comment.avatarUrl} />
        <span className="caption-name" >
          <p onClick={() => this.props.history.push(`/users/${comment.user_id}`)}><strong>{comment.username}</strong>  {comment.body}</p>
        </span>
        <div onClick={this.openModal}>...</div>
      </div>
    )
  }
}

export default withRouter(CommentItem);