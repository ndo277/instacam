import React from 'react';

class UserShow extends React.Component {
  constructor(props){
    super(props);


  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
  }

  render(){
    let user = this.props.user;
    let posts = this.props.posts;
    if (!user) return null;
    let userPosts = posts.filter(post => post.user_id == this.props.userId);
    // debugger
    return(
      <div>
        <br/><br/><br/>
        <h1>USER PROFILE UNDER CONSTRUCTION</h1> 
        {user.username}
        <img src={user.avatarUrl} alt="avatar"/>
        <ul>
        {userPosts.map(post => 
          <li>
            {post.caption}
            <img src={post.photoUrl} alt="image"/> 
          </li>
        )}
        </ul>
      </div>
    )
  }
}

export default UserShow;