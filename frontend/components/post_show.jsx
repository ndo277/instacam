import React from 'react';
import { openModal } from '../actions/modal_actions';
import {withRouter} from 'react-router';
import CommentItemContainer from './comment_item_container';

class PostShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      commentBody: "",
      liked: false,
      likesCount: 0,
      likesPhrase: "",
      updated: false
    };

    this.messagesEnd = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
    this.getPostLikes = this.getPostLikes.bind(this);
    this.getUserLike = this.getUserLike.bind(this);
    this.verifyLiked = this.verifyLiked.bind(this);
    this.countLikes = this.countLikes.bind(this);
    this.chooseLikesPhrase = this.chooseLikesPhrase.bind(this);
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
      .then(()=> {this.setState({ commentBody: "", updated: true });});
  }

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
      .then(() => {
        this.props.fetchLikes()
          .then(() => {
            // set liked
            if (this.verifyLiked() === true) {
              this.setState({ liked: true });
            } else {
              this.setState({ liked: false });
            }

            // set likes count

            let likesCount = this.countLikes();
            this.setState({ likesCount: likesCount });

            // set likes phrase

            let likesPhrase = this.chooseLikesPhrase();
            this.setState({ likesPhrase: likesPhrase });
          });
      });
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

  handleLikeClick() {
    let likeData = { like: { post_id: this.props.post.id } };

    this.props.createLike(likeData)
      .then(() => { this.setState({ liked: true }); })
      .then(() => { this.setState({ likesCount: this.state.likesCount + 1 }); })
      .then(() => { this.setState({ likesPhrase: this.chooseLikesPhrase() }); });
  }

  handleUnlikeClick() {
    let userLikeId = this.getUserLike().id;

    this.props.deleteLike(userLikeId)
      .then(() => { this.setState({ liked: false }); })
      .then(() => { this.setState({ likesCount: this.state.likesCount - 1 }); })
      .then(() => { this.setState({ likesPhrase: this.chooseLikesPhrase() }); });
  }

  handleCommentClick(){
    document.getElementById("comment-box").focus();
  }

  getUserLike() {
    let userLike = this.props.likes.filter(like =>
      like.post_id === this.props.post.id && like.user_id === this.props.currentUser.id
    );
    return userLike[0];
  }

  getPostLikes() {
    let postLikes = this.props.likes.filter(like => like.post_id === this.props.post.id);
    return postLikes;
  } 

  verifyLiked() {
    let likeUserIds = this.getPostLikes().map(like => like.user_id);
    if (likeUserIds.includes(this.props.currentUser.id)) return true;
    return false;
  }

  countLikes() {
    return this.getPostLikes().length;
  }

  chooseLikesPhrase() {
    let likes = this.countLikes();
    if (likes === 0) {
      return "Be the first to like this!";
    } else if (likes === 1) {
      return "1 like";
    } else {
      return `${likes} likes`;
    }
  }

  render(){
    let post = this.props.post;
    if (!post) return null;
    if (!post.comments) return null;
    const optionsButton = (<button className="show-button" onClick={this.openModal} >...</button>)
    const like = (
      <img onClick={this.handleLikeClick} src="/images/like-icon-white.png" alt="like" className="like-icon" />
    )
    const liked =(
      <img onClick={this.handleUnlikeClick} src="/images/like-icon-red.png" alt="liked" className="like-icon" />
    )

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
                    {this.props.currentUser.id === 1 && optionsButton}
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

            <div className="show-icons">
              <div className="like-comment">
                {!this.state.liked && like}
                {this.state.liked && liked}
                <img onClick={this.handleCommentClick} className="comment-icon" src="/images/comment-icon.png" alt="comment" />
              </div>
              <div className="like-count">
                {this.state.likesPhrase}
              </div>
            </div>

         
            <form onSubmit={this.handleSubmit} className="comment-form">
              <textarea value={this.state.commentBody} 
                     onChange={this.updateComment}
                     placeholder="Add a comment..."
                     className="comment-field"
                     id="comment-box" 
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