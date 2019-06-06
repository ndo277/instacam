import React from 'react';

class UploadAvatar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <div className="upload-avatar-modal" >
        <h1>Change Profile Photo</h1>
        <button>Upload Photo</button>
        <button>Remove Current Photo</button>
        <button>Cancel</button>
      </div>
    )
  }

}





export default UploadAvatar;