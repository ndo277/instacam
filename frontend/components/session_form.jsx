import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.processForm(user).then(()=> {
      debugger
      this.props.history.push("/")}
      );
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error) => (
          <li>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>{this.renderErrors()}</ul>

          <h2>{this.props.formType}</h2>

          <label>Username
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br/>
          <label>Password
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br/>

          <label>Email
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br />

          <input type="submit" value={this.props.formType}/>

          <br /><br />OR

          <h2>{this.props.navLink}</h2>


          <br/>


          
        </form>

      </div>



    );
  }
}

export default SessionForm;