import React from 'react';

class FollowingIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      followTabDefault: true
    };

    this.handleFollowersClick = this.handleFollowersClick.bind(this);
    this.handleFollowingClick = this.handleFollowingClick.bind(this);

  }

  handleFollowersClick(){
    this.setState({followTabDefault: true});
  }

  handleFollowingClick(){
    this.setState({followTabDefault: false});
  }

  render(){

    if (!this.props.currentUser.followers) return null;
    if (!this.props.currentUser.followees) return null;

    const followers = (
      <div>
        {this.props.currentUser.followers.map(flwr =>
          <li className="follow-index-list" key={flwr.id}>
            <div className="follow-item">
              <img className="profile-pic" src={flwr.avatarUrl} alt="avatar" />
              <div className="flw-names">{flwr.username} <br /> {flwr.display_name} </div>
            </div>
          </li>
        )}
      </div>
    )

    const followees = (
      <div>
      {
        this.props.currentUser.followees.map(flwe =>
          <li className="follow-index-list" key={flwe.id}>
            <div className="follow-item">
              <img className="profile-pic" src={flwe.avatarUrl} alt="avatar" />
              <div className="flw-names">{flwe.username} <br /> {flwe.display_name} </div>
            </div>
          </li>
        )
      }
      </div>
    )
        

    return(
      <ul className="follow-index">
        <button onClick={this.handleFollowersClick}>FOLLOWERS</button> 
        <button onClick={this.handleFollowingClick}>FOLLOWING</button>
        <br/><br/>
        {this.state.followTabDefault && followers}
        {!this.state.followTabDefault && followees}
      </ul>
    )
  }
}

export default FollowingIndex;