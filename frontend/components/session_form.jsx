import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=> {
      this.props.history.push("/")}
      );
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const demoUser = { username: "nhdo", password: "password" };
    this.props.login(demoUser).then(() => {
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
      <div className="authbox">
          
  
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <h1 className="logo-name">Instacam</h1>

            <h2>{this.props.formType}</h2>

            <button className="auth-button"  
              onClick={this.handleDemoSubmit}>
              Demo User
            </button>

            <h3> ------ OR ------- </h3>
           
            <input type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')}
            />

            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />

            <input className="auth-button" type="submit" value={this.props.buttonType}/>
            
            <ul>{this.renderErrors()}</ul>
          
          </form>
      

        <div className="bottom-authbox">
            <p>{this.props.queryType} {this.props.navLink}</p>
        </div>
          

      </div>



    );
  }
}

export default SessionForm;