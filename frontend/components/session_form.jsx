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
      <div className="image-form">
        <div className="box"></div>
        <img src="/images/phones.png" />

        <main className="authbox">

            <form className="auth-form" onSubmit={this.handleSubmit}>
              <h1 className="logo-name">Instacam</h1>

              <h3 className="form-type">{this.props.formType}</h3>

              <button className="auth-button"  
                onClick={this.handleDemoSubmit}>
                Log in with Demo User
              </button>

              <h3 className="or-text">OR</h3>
            
              <input className="form-field" type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
              />

            <input className="form-field" type="password"
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
            

        </main>

        <div className="box"></div>
      </div>

    );
  }
}

export default SessionForm;