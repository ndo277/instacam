import React from 'react';
import {withRouter} from 'react-router';
import { openModal } from '../actions/modal_actions';

class UserEdit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.currentUser.display_name,
      username: this.props.currentUser.username,
      website: this.props.currentUser.website,
      bio: this.props.currentUser.bio
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error) => (
          <p>{error}</p>
        ))}
      </ul>
    )
  }

  handleSubmit(){
    let currentUser = this.props.currentUser;
    let oldUsername = this.props.currentUser.username;
    currentUser.display_name = this.state.name;
    currentUser.username = this.state.username;
    currentUser.website = this.state.website;
    currentUser.bio = this.state.bio;
    this.props.updateUser(currentUser);
    if (this.state.username){
      setTimeout(() => this.props.history.push(`/users/${currentUser.id}/`), 500);
    } 
    else {
      this.setState({ username: oldUsername});
    }
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

            {currentUser.username ? (<h3 className="name">{currentUser.username}</h3>) : (<ul className="user-errors">{this.renderErrors()}</ul>)}
           
            <button onClick={this.openModal} className="change-button">Change Profile Photo</button>
          </div>

        </div>

        <div className="field-name">
          <h3 >Name</h3>
          <h3>Username</h3>
          <h3>Website</h3>
          <h3>Bio</h3>
        </div>
        

        {/* <div className="name-field">
          <h3 >Name</h3>
            <input className="edit-name-field" value={this.state.name} onChange={this.update('name')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Username</h3>
          <input className="edit-name-field" value={this.state.username} onChange={this.update('username')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Website</h3>
          <input className="edit-name-field" value={this.state.website} onChange={this.update('website')} type="text"/>
        </div>

        <div className="name-field">
          <h3>Bio</h3>
          <textarea className="edit-name-field-bio" value={this.state.bio} onChange={this.update('bio')} type="text"/>
        </div> */}

        <br/>

        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
}

export default withRouter(UserEdit);