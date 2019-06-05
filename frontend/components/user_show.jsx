import React from 'react';

class UserShow extends React.Component {
  constructor(props){
    super(props);


  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render(){
    let user = this.props.user;
    if (!user) return null;
  
    return(
      <div>
        <br/><br/><br/>
        <h1>USER PROFILE UNDER CONSTRUCTION</h1> 
        {user.username}
        <img src={user.avatarUrl} alt="avatar"/>
        <ul>
          {this.props.user.posts.map((post) => {
            return <li>
              {post.caption}
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default UserShow;