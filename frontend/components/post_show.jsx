import React from 'react';
import { openModal } from '../actions/modal_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

class PostShow extends React.Component {
  constructor(props){
    super(props);

    this.openModal = this.openModal.bind(this);
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
    const optionsButton = (<button className="show-button" onClick={this.openModal} >...</button>)
    return(
      <div className="show-box">
        <div className="show-item" >

        <img className="show-image" src={this.props.post.photoUrl} />

          <div className="show-side">
        <div className="show-top">
          <img className="profile-pic" src={this.props.post.avatarUrl} />
          
          <div className="show-name-button">
          <p className="avatar-name" >{this.props.post.username}</p>
            {this.props.post.user_id == this.props.currentUser.id && optionsButton}
          </div>

        </div>

        <div className="show-caption">
          <img className="profile-pic" src={this.props.post.avatarUrl} />

    
          <span className="caption-name" >
                <p><strong>{this.props.post.username}</strong>  {this.props.post.caption}</p>
         </span>

        </div>

         </div>

        </div>
      </div>
    )
  }
}

export default PostShow;