import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="user-prof-top">
          <img className="user-profile-avatar" src={user.avatarUrl} alt="avatar" />
          
          <div className="profile-desc" >
            <h2>{user.username}</h2>
            <h2>{user.display_name}</h2>
            <h2>{user.bio}</h2>
            <h2>{user.website}</h2>
          </div>

          <Link to={`/users/${this.props.currentUser.id}/edit`} >Edit Profile</Link>
          
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