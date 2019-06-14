import React from 'react';
import { openModal } from '../actions/modal_actions';
import {withRouter} from 'react-router';

class PostShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      commentBody: ""
    };

    this.openModal = this.openModal.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateComment(e){
    this.setState({
      commentBody: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = {comment: {body: this.state.commentBody, post_id: this.props.postId}};
    this.props.createComment(comment);
    this.setState({commentBody: ""});
  }

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId);
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
              <span className="caption-name" >
                <p onClick={() => this.props.history.push(`/users/${post.user_id}`)}><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
              </span>
            </div>

            <div className="show-comments">
              <ul>
                {this.props.post.comments.map(comment=>
                  <li key={comment.id}>
                    {comment.user_id + ": " + comment.body}
                  </li>
                  )}
              </ul>
            </div>

         
            <form onSubmit={this.handleSubmit} className="comment-form">
              <input value={this.state.commentBody} 
                     onChange={this.updateComment}
                     placeholder="Add a comment" 
                     type="text"/>
              <input value="Post" type="submit"/>
            </form>
        

          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(PostShow);