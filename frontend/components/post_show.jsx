import React from 'react';
import { openModal } from '../actions/modal_actions';
import {withRouter} from 'react-router';
import CommentItemContainer from './comment_item_container';

class PostShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      commentBody: "",
      updated: false
    };

    this.messagesEnd = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom(){
    if (!this.messagesEnd.current) return null;
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }

  updateComment(e){
    this.setState({
      commentBody: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = {comment: {body: this.state.commentBody, post_id: this.props.postId}};
    this.props.createComment(comment)
      .then(this.setState({ commentBody: "", updated: true }));
  }

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentDidUpdate(){
    if (this.state.updated){
      this.props.fetchPost(this.props.match.params.postId).then(
        this.setState({updated: false})
      );
    }
    this.scrollToBottom();
  }

  openModal() {
    dispatch(openModal('edit', this.props.post));
  }

  render(){
    let post = this.props.post;
    if (!post) return null;
    if (!post.comments) return null;
    const optionsButton = (<button className="show-button" onClick={this.openModal} >...</button>)
    return(
      <div className="show-box">
        <div className="show-item" >

          <img className="show-image" src={this.props.post.photoUrl} />

          <div className="show-side">

            <div className="show-top">
              <img onClick={() => this.props.history.push(`/users/${post.user_id}`)} className="profile-pic" src={this.props.post.avatarUrl} />       
                <div className="show-name-button">
                  <p onClick={() => this.props.history.push(`/users/${post.user_id}`)} className="avatar-name" >{this.props.post.username}</p>
                    {this.props.post.user_id === this.props.currentUser.id && optionsButton}
                </div>
            </div>

            <div className="show-caption">
              <img onClick={() => this.props.history.push(`/users/${post.user_id}`)} className="profile-pic" src={this.props.post.avatarUrl} />
              <span>
                <p><strong className="caption-name" onClick={() => this.props.history.push(`/users/${post.user_id}`)}>{this.props.post.username} </strong> 
                   {this.props.post.caption}</p>
              </span>
            </div>

            <div id="scroll" className="show-comments">
                {this.props.post.comments.map(comment=> {
                  return <li key={comment.id} className="show-caption">
                    <CommentItemContainer comment={comment}/>
                  </li>
                  })}
              <div ref={this.messagesEnd} />
            </div>

         
            <form onSubmit={this.handleSubmit} className="comment-form">
              <textarea value={this.state.commentBody} 
                     onChange={this.updateComment}
                     placeholder="Add a comment..."
                     className="comment-field" 
                     type="text"/>
              <input value="Post" className="comment-button" type="submit"/>
            </form>
        

          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(PostShow);