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
    const user = this.props.user;
    const posts = this.props.posts;
    const editProfile = (
        <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`} className="edit-profile">Edit Profile</Link>
        </div>
      )


    if (!user) return null;
    let userPosts = posts.filter(post => post.user_id == this.props.userId);
    let postCount = userPosts.length;

    return(
      <div>
        <div className="user-prof-top">

          <div className="user-avatar-container">
            <img className="user-profile-avatar" src={user.avatarUrl} alt="avatar" />
          </div>
          
          <div className="profile-desc" >

            <div className="username-edit">
              <h2>{user.username}</h2>
              {user.id === this.props.currentUser.id && editProfile}
            </div>

            <div className="post-count"> 
              <strong>{postCount}</strong> posts
            </div>

            <div className="display-name">{user.display_name}</div>
            <div className="bio">{user.bio}</div>
            <a href={`http://${user.website}`} className="user-website">{user.website}</a> 
          </div>
          
          
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