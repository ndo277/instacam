import React from 'react';
import {withRouter} from 'react-router';

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
    document.getElementById("following-button").style.color = "grey";
    document.getElementById("follower-button").style.color = "black";
  }

  handleFollowingClick(){
    this.setState({followTabDefault: false});
    document.getElementById("following-button").style.color = "black";
    document.getElementById("follower-button").style.color = "grey";
  }

  render(){

    if (!this.props.currentUser.followers) return null;
    if (!this.props.currentUser.followees) return null;


    const followers = (
      <div>
        {this.props.currentUser.followers.map(flwr =>
          <li className="follow-index-list" key={flwr.id}>
            <div className="follow-item">
              <img className="profile-pic-flw" 
                   onClick={() => this.props.history.push(`/users/${flwr.id}`)}
                   src={flwr.avatarUrl} 
                   alt="avatar" />
              <div className="flw-names" 
                   onClick={() => this.props.history.push(`/users/${flwr.id}`)}>
                  <div className="flw-username">{flwr.username}</div>
                  <div className="flw-displayname">{flwr.display_name}</div>
              </div>
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
              <img className="profile-pic-flw" 
                   src={flwe.avatarUrl} 
                   onClick={() => this.props.history.push(`/users/${flwe.id}`)}
                   alt="avatar" />
              <div className="flw-names" 
                   onClick={() => this.props.history.push(`/users/${flwe.id}`)}>
                <div className="flw-username">{flwe.username}</div>
                <div className="flw-displayname">{flwe.display_name}</div>
              </div>
            </div>
          </li>
        )
      }
      </div>
    )
        

    return(
      <ul className="follow-index">
        <div className="flw-btns">
          <button onClick={this.handleFollowersClick} 
                  className="followers-button"
                  id="follower-button">FOLLOWERS</button> 
          <button onClick={this.handleFollowingClick}
                  className="following-button"
                  id="following-button">FOLLOWING</button>
        </div>
        <br/>
        {this.state.followTabDefault && followers}
        {!this.state.followTabDefault && followees}
      </ul>
    )
  }
}

export default withRouter(FollowingIndex);