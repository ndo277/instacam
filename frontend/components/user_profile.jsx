import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import { withRouter } from 'react-router';
import UserProfileItem from './user_profile_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      following: null,
      followerCount: 0,
      followingCount: 0
    };

    this.openModal = this.openModal.bind(this);
    this.handleFollowClick = this.handleFollowClick.bind(this);
    this.handleUnfollowClick = this.handleUnfollowClick.bind(this);
    this.getFollowers = this.getFollowers.bind(this);
    this.getFollowing = this.getFollowing.bind(this);
    this.getCurrentUserFollow = this.getCurrentUserFollow.bind(this);
    this.verifyCurrentUserIsFollowing = this.verifyCurrentUserIsFollowing.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => {
        this.props.fetchFollows()
          .then(() => this.verifyCurrentUserIsFollowing())
          .then(() => this.setState({followerCount: this.getFollowers().length,
                                     followingCount: this.getFollowing().length}));
      });
    // debugger
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
      .then(() => this.setState({ following: true, followerCount: this.state.followerCount + 1}));
  }

  handleUnfollowClick(){
    let userFollowId = this.getCurrentUserFollow().id;
    this.props.deleteFollow(userFollowId)
      .then(() => this.setState({ following: false, followerCount: this.state.followerCount - 1}));
  }

  getCurrentUserFollow(){
    let userFollow = this.props.follows.filter(follow =>
      follow.follower_id === this.props.currentUser.id && follow.followee_id === this.props.user.id
      );
    return userFollow[0];
  }

  getFollowers(){
    let userFollows = this.props.follows.filter(follow => follow.followee_id === this.props.user.id);
    let followers = userFollows.map(follow => follow.follower_id);
    return followers;
  }

  getFollowing(){
    let userFollowings = this.props.follows.filter(follow => follow.follower_id === this.props.user.id);
    let followedUsers = userFollowings.map(follow => follow.follower_id);
    return followedUsers;
  }

  verifyCurrentUserIsFollowing(){
    if (this.getFollowers().includes(this.props.currentUser.id)){
      this.setState({following: true});
    } else {
      this.setState({following: false});
    }
  }


  render(){
    const user = this.props.user;
    if (!user) return null;
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

    const unfollowButton = (
      <button onClick={this.handleUnfollowClick} className="edit-profile">
        Unfollow
              </button>
    )

    const postDescriptorSingular = "post"
    const postDescriptorPlural = "posts"
    const followerDescriptorSingular = "follower"
    const followerDescriptorPlural = "followers"

    if (!user.posts) return null;
    let postCount = user.posts.length;

    return(
      <div>
        <div className="user-prof-top">

          <div className="user-avatar-container">
            <div className="profile-pic-container">
              {this.props.user.id === this.props.currentUser.id ? userAvatar1 : userAvatar2}
            </div>
          </div>
          
          <div className="profile-desc" >

            <div className="username-edit">
              <h2>{user.username}</h2>
              {user.id === this.props.currentUser.id && editProfile}
              {(user.id != this.props.currentUser.id && !this.state.following) && followButton}
              {(user.id != this.props.currentUser.id && this.state.following) && unfollowButton}
            </div>

            <div className="profile-counts">

              <div className="post-count"> 
                <strong>{postCount}</strong> {postCount === 1 && postDescriptorSingular}
                {postCount != 1 && postDescriptorPlural}
              </div>

              <div className="followers-count">
                <strong>{this.state.followerCount}</strong> {this.state.followerCount === 1 && followerDescriptorSingular}
                {this.state.followerCount != 1 && followerDescriptorPlural}
              </div>

              <div className="followers-count">
                <strong>{this.state.followingCount}</strong> following
              </div>

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