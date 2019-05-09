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

        <button className="options-button" onClick={this.openModal} >...</button>

      </div>

      <img className= "feed-image" src={this.props.post.photoUrl}/>

        <span className="feed-post-part" >
          <p className="more"><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
        </span>

      </div>
    )
  }
}

export default PostIndexItem;