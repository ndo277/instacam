import React from 'react';

class UploadAvatar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      avatarFile: null
    };

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({avatarFile: file}, () => {
      const formData = new FormData();
      formData.append('user[avatar]', this.state.avatarFile);
      this.props.updateUserAvatar(this.props.currentUser.id, formData);
      this.props.closeModal();
      this.setState({ avatarFile: null });
    });
  }

  render() {
    return(
      <div className="upload-avatar-modal" >
        <h1>Change Profile Photo</h1>

        <label htmlFor="file-upload" className="file-upload">Upload Photo</label>
        <input onChange={this.handleFile} id="file-upload" type="file" className="file-default"/>
  

        <button>Remove Current Photo</button>
        <button>Cancel</button>
      </div>
    )
  }

}





export default UploadAvatar;