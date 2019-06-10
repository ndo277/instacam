import React from 'react';

class UploadAvatar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      avatarFile: null
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleCancel(){
    this.props.closeModal();
  }

  render() {
    return(
      <div className="upload-avatar-modal" >
        <h3 className="change-title">Change Profile Photo</h3>

        <label htmlFor="file-upload" className="file-upload">Upload Photo</label>
        <input onChange={this.handleFile} id="file-upload" type="file" className="file-default"/>
  
        <button onClick={this.handleCancel} className="modal-button">Cancel</button>
      </div>
    )
  }

}





export default UploadAvatar;