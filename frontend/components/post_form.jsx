import React from 'react';
import {withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      caption: "",
      photoFile: null,
      open: false,
      photoUrl: null,
      loading: false
    };

    this.container = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside (e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  }

  handleButtonClick() {
    this.setState({open: !this.state.open});
  }


  handleInput(e) {
    this.setState({caption: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[caption]', this.state.caption);
    formData.append('post[photo]', this.state.photoFile);
    this.props.createPost(formData)
      .then(this.setState({loading: true}))
      .then(setTimeout(()=> {
        this.setState({loading: false});
        this.setState({ open: false, caption: "", photoUrl: null });
        this.props.history.push(`/posts/${this.props.newest.id}`);
      }, 2000));
  }

  render() {
    const spinner = (
      <i className="fa fa-refresh fa-spin" />
    )

    const preview = this.state.photoUrl 
                  ?
                  <div>
                    <img src={this.state.photoUrl} />
                    <textarea className="text-field" placeholder="Add a caption..."
                      type="text"
                      value={this.state.caption}
                      onChange={this.handleInput} />
                    <br/>
                    <button className="create-button" disabled={this.state.loading}>
                      {!this.state.loading && <span>Create Post</span>}
                      {this.state.loading && spinner}

                      {this.state.loading && <span> Creating Post...</span>}
                    </button>
                  </div>
                  :
                  null;

    const uploadForm = (
      <div className="upload-form">
        <h3 className="upload-message">Upload Photo</h3>
        <form className="upload-field" onSubmit={this.handleSubmit}>
          <input className="file-name" type="file" 
            onChange={this.handleFile} />

          <div className="preview"> {preview} </div>

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