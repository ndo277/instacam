import React from 'react';
import {withRouter} from 'react-router';

class PostForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      caption: "",
      photoFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);

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
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Enter caption..." 
               type="text"
               value={this.state.caption}
               onChange={this.handleInput}/>
         <input type="file"
                onChange={this.handleFile} />
        <input type="submit" value="Submit"/>
      
      </form>
    )
  };


}



export default withRouter(PostForm);