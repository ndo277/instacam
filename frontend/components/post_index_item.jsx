import React from 'react';
import {openModal} from '../actions/modal_actions';
import {withRouter} from 'react-router';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      liked: false,
      likesCount: ""
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
    this.getPostLikes = this.getPostLikes.bind(this);
    this.getUserLike = this.getUserLike.bind(this);
    this.verifyLiked = this.verifyLiked.bind(this);
    this.countLikes = this.countLikes.bind(this);
  }

  componentDidMount(){
    // set like icon
    if (this.verifyLiked() === true){
      this.setState({liked: true});
    } else {
      this.setState({liked: false});
    }

    // set like counts
    let likesCount = this.countLikes();

    if (likesCount > 0) {
      this.setState({ likesCount: likesCount });
    } else {
      this.setState({ likesCount: "" });
    }
  }

  verifyLiked(){
    let likeUserIds = this.getPostLikes().map(like => like.user_id);
    if (likeUserIds.includes(this.props.currentUser.id)) return true;
    return false;
  }

  getPostLikes(){
    let postLikes = this.props.likes.filter(like => like.post_id === this.props.post.id);
    return postLikes;
  } 

  getUserLike(){
    let userLike = this.props.likes.filter(like => 
      like.post_id === this.props.post.id && like.user_id === this.props.currentUser.id
      );
    return userLike[0];
  }

  countLikes(){
    return this.getPostLikes().length;
  }

  handleClick() {
    this.props.history.push(`/users/${this.props.post.user_id}`);
  }

  handlePhotoClick(){
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  handleLikeClick(){
    let likeData = {like: {post_id: this.props.post.id}};
    this.props.createLike(likeData)
      .then(this.setState({liked: true}))
      .then(this.setState({likesCount: this.state.likesCount + 1}));
  }

  handleUnlikeClick(){
    let userLikeId = this.getUserLike().id;
    this.props.deleteLike(userLikeId)
      .then(this.setState({liked: false}))
      .then(this.setState({likesCount: this.state.likesCount - 1}));
  }

  openModal(){
    dispatch(openModal('options', this.props.post));
  }

  render() {
    const like = (
      <img onClick={this.handleLikeClick} src="/images/like-icon-white.png" alt="like" className="like-icon" />
    )
    const liked = (
      <img onClick={this.handleUnlikeClick} src="/images/like-icon-red.png" alt="liked" className="like-icon" />
    )
    return(
      <div className="feed-post" >

      <div className="feed-post-part">
        <img onClick={this.handleClick} className="profile-pic" src={this.props.post.avatarUrl} />

          <div className="post-name-options">
            <p onClick={this.handleClick} className="avatar-name" >{this.props.post.username}</p>
        <button className="options-button" onClick={this.openModal} >...</button>
          </div>

      </div>

          <img onClick={this.handlePhotoClick} className= "feed-image" src={this.props.post.photoUrl}/>

        
        <span className="feed-post-part" >
          <div className="like-caption">
            {!this.state.liked && like}
            {this.state.liked && liked}
            <br/>
            {`${this.state.likesCount} likes`}
            <p className="more"><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
          </div>
        </span>

      </div>
    )
  }
}

export default withRouter(PostIndexItem);