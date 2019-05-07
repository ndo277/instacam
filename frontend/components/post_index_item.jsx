import React from 'react';

class PostIndexItem extends React.Component {
  constructor (props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidUpdate(){
  //   // debugger
  //   if (this.props.post.id){
  //     fetchPosts();
  //   }
  // }

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