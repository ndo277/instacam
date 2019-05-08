import React from 'react';
import {Link} from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
    return(
      <div className="feed-post" >

      <div className="feed-post-part">
        <img className="profile-pic" src={this.props.post.avatarUrl} />
        <p className="avatar-name" >{this.props.post.username}</p>
        <button className="delete-button" onClick={this.handleClick}>Delete</button>
        
        <Link to={`/posts/${this.props.post.id}`}>
          <button>Go to post</button>
        </Link>
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