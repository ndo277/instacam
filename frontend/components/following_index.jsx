import React from 'react';

class FollowingIndex extends React.Component {
  constructor(props){
    super(props);

    this.getFolloweeIds = this.getFolloweeIds.bind(this);
    this.getFollowees = this.getFollowees.bind(this);
  }

  componentDidMount(){
    this.props.fetchFollows()
      .then(() => this.props.fetchUsers());
  }

  getFolloweeIds(){
    let userFollows = this.props.follows.filter(follow => follow.follower_id === this.props.currentUser.id);
    return userFollows.map(follow => follow.followee_id);
  }

  getFollowees(){
    let followeeIds = this.getFolloweeIds();
    return this.props.users.filter(user => followeeIds.includes(user.id));
  }

  render(){
    return(
      <ul className="following-index">
        {this.getFollowees().map(flw =>
          <li className="follow-index-list">
            <div className="follow-item">
              <img className="profile-pic" src={flw.avatarUrl} alt="avatar"/>
              <div className="names">
                {flw.username}  {flw.display_name}
              </div>
            </div>
          </li>
          )}
      </ul>
    )
  }
}

export default FollowingIndex;