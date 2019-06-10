import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';

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
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id);
  }

  openModal() {
    dispatch(openModal('pic'));
  }

  handleSubmit(){
    let currentUser = this.props.currentUser;
    currentUser.display_name = this.state.name;
    currentUser.username = this.state.username;
    currentUser.website = this.state.website;
    currentUser.bio = this.state.bio;
    this.props.updateUser(currentUser);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let currentUser = this.props.currentUser;

    return(
      <div className="user-edit-form">

        <div className="pic-name-upload">
          <img className="user-edit-avatar" src={currentUser.avatarUrl} alt="avatar"/>

          <div className="name-upload">
            <h3>{currentUser.username}</h3>
            <button onClick={this.openModal}>Change Profile Photo</button>
          </div>

        </div>

        <div className="name-field">
          <h3>Name</h3>
            <input value={this.state.name} onChange={this.update('name')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Username</h3>
          <input value={this.state.username} onChange={this.update('username')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Website</h3>
          <input value={this.state.website} onChange={this.update('website')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Bio</h3>
          <input value={this.state.bio} onChange={this.update('bio')} type="text"/>
        </div>

        <br/>
        <Link to={`/users/${currentUser.id}/`} onClick={this.handleSubmit}>Submit</Link>
   

      </div>
    )
  }
}

export default withRouter(UserEdit);