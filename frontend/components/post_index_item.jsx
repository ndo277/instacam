import React from 'react';
import {openModal} from '../actions/modal_actions';
import {withRouter} from 'react-router';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.post.user_id}`);
  }

  openModal(){
    dispatch(openModal('options', this.props.post));
  }

  render() {
    return(
      <div className="feed-post" >

      <div className="feed-post-part">
        <img onClick={this.handleClick} className="profile-pic" src={this.props.post.avatarUrl} />

          <div className="post-name-options">
            <p onClick={this.handleClick} className="avatar-name" >{this.props.post.username}</p>
        <button className="options-button" onClick={this.openModal} >...</button>
          </div>

      </div>

      <img className= "feed-image" src={this.props.post.photoUrl}/>

        <span className="feed-post-part" >
          <p className="more"><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
        </span>

      </div>
    )
  }
}

export default withRouter(PostIndexItem);