import React from 'react';
import {openModal} from '../actions/modal_actions';
import {withRouter} from 'react-router';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      liked: false
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.getPostLikes = this.getPostLikes.bind(this);
  }

  getPostLikes(){
    let postLikes = this.props.likes.filter(like => like.post_id === this.props.post.id);
    return postLikes;
  } 

  handleClick() {
    this.props.history.push(`/users/${this.props.post.user_id}`);
  }

  handlePhotoClick(){
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  handleLikeClick(){
    this.setState({liked: !this.state.liked});
  }

  openModal(){
    dispatch(openModal('options', this.props.post));
  }

  render() {
    const like = (
      <img onClick={this.handleLikeClick} src="/images/like-icon-white.png" alt="like" className="like-icon" />
    )
    const liked = (
      <img onClick={this.handleLikeClick} src="/images/like-icon-red.png" alt="liked" className="like-icon" />
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
            <p className="more"><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
          </div>
        </span>

      </div>
    )
  }
}

export default withRouter(PostIndexItem);