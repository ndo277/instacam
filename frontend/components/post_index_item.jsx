import React from 'react';
import {openModal} from '../actions/modal_actions';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  openModal(){
    dispatch(openModal('options', this.props.post));
  }

  render() {
    return(
      <div className="feed-post" >

      <div className="feed-post-part">
        <img className="profile-pic" src={this.props.post.avatarUrl} />
        <p className="avatar-name" >{this.props.post.username}</p>

        <button onClick={this.openModal} >. . .</button>

      </div>

      <img className= "feed-image" src={this.props.post.photoUrl}/>

      <div className="feed-post-part" >
        <p className="avatar-name" >{this.props.post.username}</p>
        <p className="post-caption" >{this.props.post.caption}</p>
      </div>

      </div>
    )
  }
}

export default PostIndexItem;