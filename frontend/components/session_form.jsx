import React from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
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
      this.props.history.push("/")
    });
  }

  handleDemoSubmit(e) {
    e.preventDefault();

    let demoUser = 'vhsjoh'.split("");
    let demoPassword = 'password'.split("");

    this.setState({
      username: "",
      password: "",
    }, () => this.demoLogin(demoUser, demoPassword));
    
    setTimeout(this.loginDemoUser, 1500);
    
  }
  
  loginDemoUser(){
    this.props.login({ username: "vhsjoh", password: "password" }).then(() => {
      this.props.history.push("/");
    }
    );
  }

  demoLogin(username, password) {
    if (username.length > 0) {
      this.setState({ username: this.state.username += username.shift() },
        () => window.setTimeout(() => this.demoLogin(username, password), 60));
    } else if (password.length > 0) {
      this.setState({ password: this.state.password += password.shift() },
        () => window.setTimeout(() => this.demoLogin(username, password), 70));
    } else if (username.length === 0 && password.length === 0) {
      this.props.demoLogin(this.state);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error) => (
          <p>{error}</p>
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

            <input className="auth-button" type="submit" value={this.props.buttonType} />

            <ul className="session-errors">{this.renderErrors()}</ul>

                  <div className="or-line-text">
                <div className="or-line"/>
              <h3 className="or-text">OR</h3>
                <div className="or-line" />
                  </div>

            <button className="auth-button"
              onClick={this.handleDemoSubmit}>
              Log in with Demo User
              </button>
            
            </form>
        

          <div className="bottom-authbox">
            <p>{this.props.queryType} <Link className="navlink" to={this.props.urlType}>{this.props.linkType}</Link></p>
          </div>
            

        </main>

        <div className="box"></div>
      </div>

    );
  }
}

export default SessionForm;