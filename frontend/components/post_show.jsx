import React from 'react';

class PostShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId);
  }

  render(){
    let post = this.props.post;
    if (!post) return null;
    return(
      <div>
        <h3>POST SHOW</h3>
        <img className="feed-image" src={this.props.post.photoUrl} />
        <img className="profile-pic" src={this.props.post.avatarUrl} />
        <p className="avatar-name" >{this.props.post.username}</p>
        <p className="post-caption" >{this.props.post.caption}</p>
      </div>
    )
  }
}

export default PostShow;