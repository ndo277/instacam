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
    dispatch(openModal('delete', this.props.comment));
  }

  render(){
    let comment = this.props.comment;
    if (!comment) return null;
    const commentOptions = (<div className="delete-dots" onClick={this.openModal}>...</div>);
    return(
      <div className="comment-item">
        <img onClick={() => this.props.history.push(`/users/${comment.user_id}`)} className="profile-pic" src={comment.avatarUrl} />
          <span className="comment-row">
              <p className="username-comment" onClick={() => this.props.history.push(`/users/${comment.user_id}`)}>
                <strong className="caption-name" >{comment.username}</strong>  {comment.body}</p>
            {this.props.currentUser.id === comment.user_id && commentOptions}
          </span>
        </div>
    )
  }
}

export default withRouter(CommentItem);