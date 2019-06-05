import React from 'react';
import {withRouter} from 'react-router';

class UserEdit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      username: "",
      website: "",
      bio: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleSubmit(){
    const currentUser = this.props.currentUser;
    currentUser.display_name = this.state.name;
    currentUser.username = this.state.username;
    currentUser.website = this.state.website;
    currentUser.bio = this.state.bio;
    this.props.updateUser(currentUser).then(() => {
      this.props.history.push(`/users/${currentUser.id}`);
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let currentUser = this.props.currentUser;

    return(
      <div>
        <br/><br/><br/>
        <h1>EDIT FORM</h1>
        <img src={currentUser.avatarUrl} alt="avatar"/>
        <h2>{currentUser.username}</h2>

        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
            <input value={this.state.name} onChange={this.update('name')} type="text"/>
          <h3>Username</h3>
          <input value={this.state.username} onChange={this.update('username')} type="text"/>
          <h3>Website</h3>
          <input value={this.state.website} onChange={this.update('website')} type="text"/>
          <h3>Bio</h3>
          <input value={this.state.bio} onChange={this.update('bio')} type="text"/>
            <br/>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    )
  }
}

export default withRouter(UserEdit);