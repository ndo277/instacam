import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import { withRouter } from 'react-router';
import UserProfileItem from './user_profile_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      following: false
    };

    this.openModal = this.openModal.bind(this);
    this.handleFollowClick = this.handleFollowClick.bind(this);
    this.getFollowers = this.getFollowers.bind(this);
    this.verifyCurrentUserIsFollowing = this.verifyCurrentUserIsFollowing.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => {
        this.props.fetchFollows()
          .then(() => this.verifyCurrentUserIsFollowing());
      });
    this.props.fetchLikes();
    this.props.fetchComments();
  }

  openModal() {
    if (this.props.user.id === this.props.currentUser.id){
      dispatch(openModal('pic'));
    }
  }

  handleFollowClick(){
    let followData = {follow: {followee_id: this.props.user.id}};
    this.props.createFollow(followData)
      .then(()=> this.setState({following: true}));
  }

  getFollowers(){
    let userFollows = this.props.follows.filter(follow => follow.followee_id === this.props.user.id);
    let followers = userFollows.map(follow => follow.follower_id);
    return followers;
  }

  verifyCurrentUserIsFollowing(){
    if (this.getFollowers().includes(this.props.currentUser.id)){
      this.setState({following: true});
    }
  }


  render(){
    const user = this.props.user;
    if (!user) return null;
    const posts = this.props.posts;
    const editProfile = (
        <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`} className="edit-profile">Edit Profile</Link>
        </div>
      )

    const userAvatar1 = (
      <div>
        <img onClick={this.openModal} className="user-profile-avatar1" src={user.avatarUrl} alt="avatar" />
      </div>
    )

    const userAvatar2 = (
      <div>
        <img onClick={this.openModal} className="user-profile-avatar2" src={user.avatarUrl} alt="avatar" />
      </div>
    )

    const followButton = (
      <button onClick={this.handleFollowClick} className="follow-button">
        Follow
              </button>
    )

    const followingButton = (
      <button className="edit-profile">
        Following
              </button>
    )


    if (!user) return null;
    let postCount = user.posts.length;

    return(
      <div>
        <div className="user-prof-top">

          <div className="user-avatar-container">
            {this.props.user.id === this.props.currentUser.id ? userAvatar1 : userAvatar2}
          </div>
          
          <div className="profile-desc" >

            <div className="username-edit">
              <h2>{user.username}</h2>
              {user.id === this.props.currentUser.id && editProfile}
              {(user.id != this.props.currentUser.id && !this.state.following) && followButton}
              {this.state.following && followingButton}
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
        {user.posts.map(post => 
          <li className="post-index-list" key={post.id}>
            <UserProfileItem post={post} likes={this.props.likes} comments={this.props.comments} 
                             fetchLikes={this.props.fetchLikes}
                             fetchComments={this.props.fetchComments}/>
          </li>
        )}
        </ul>

      </div>
    )
  }
}

export default withRouter(UserProfile);