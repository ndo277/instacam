import React from 'react';
import {withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      caption: "",
      photoFile: null,
      show: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleClick(e) {
    this.setState({ show: true }, () => 
    document.addEventListener('click', this.hideForm));
  }

  hideForm(e) {
    this.setState({ show: false }, () =>
    document.removeEventListener('click', this.hideForm));
  }

  handleInput(e) {
    this.setState({caption: e.currentTarget.value});
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append('post[caption]', this.state.caption);
    formData.append('post[photo]', this.state.photoFile);
    this.props.createPost(formData).then(()=>this.props.update); 
  }

  render() {
    const uploadForm = (
      <div>
        <form className="upload" onSubmit={this.handleSubmit}>
          <input type="file"
            onChange={this.handleFile} />
          <input placeholder="Enter caption..."
            type="text"
            value={this.state.caption}
            onChange={this.handleInput} />
          <input type="submit" value="Create post" />
        </form>
      </div>)

    return (
      <div className="upload-button-form">
        {(this.state.show) ? uploadForm : null}
        <img onClick={this.handleClick} className="upload-button" src="/images/upload.png" alt="upload" />
      </div>
    )
  };


}


export default withRouter(PostForm);