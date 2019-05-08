import React from 'react';
import {withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      caption: "",
      photoFile: null,
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // handleClickOutside (event) {
  //   const container = React.createRef();
  //   if (this.container.current && !this.container.current.contains(event.target)) {
  //     this.setState({
  //       open: false,
  //     });
  //   }
  // }

  handleButtonClick() {
    this.setState({open: !this.state.open});
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
      <div className="upload-form">
        <form onSubmit={this.handleSubmit}>
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
      <div className="upload-container" ref={this.container}>
        <img onClick={this.handleButtonClick} className="upload-button" src="/images/upload.png" alt="upload" />
        {this.state.open && uploadForm}
      </div>
    )
  };


}


export default withRouter(PostForm);