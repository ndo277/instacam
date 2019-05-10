import React from 'react';

class EditPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      caption: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit () {
    this.props.post.caption = this.state.caption;
    dispatch(this.props.updatePost(this.props.post));
    dispatch(this.props.closeModal());
  }

  handleCancel () {
    dispatch(this.props.closeModal());
  }

  handleInput(e) {
    this.setState({ caption: e.currentTarget.value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Update caption..." 
                    value={this.state.caption}
                    onChange={this.handleInput} />
          <input type="submit" value="Update post"/>
        </form>
        
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }

};

export default EditPost;