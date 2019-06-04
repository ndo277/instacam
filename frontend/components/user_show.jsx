import React from 'react';

class UserShow extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    return(
      <div>
        <br/><br/><br/>
        <h1>USER PROFILE UNDER CONSTRUCTION</h1>
        <p>{this.props.currentUser.username}</p>
      </div>
    )
  }
}

export default UserShow;