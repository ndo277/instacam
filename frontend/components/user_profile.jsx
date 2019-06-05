import React from 'react';

class UserProfile extends React.Component {
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
    return(
      <div>
        <br/><br/><br/>
        <h1>USER PROFILE UNDER CONSTRUCTION</h1> 

        <div className="user-prof-top">
          <img className="user-profile-avatar" src={user.avatarUrl} alt="avatar" />
          <h2>{user.username}</h2>
        </div>

        <ul className="image-grid">
        {userPosts.map(post => 
          <li className="post-index-list" key={post.id}>
            <img className="user-profile-images" src={post.photoUrl} alt="image"/> 
          </li>
        )}
        </ul>

      </div>
    )
  }
}

export default UserProfile;