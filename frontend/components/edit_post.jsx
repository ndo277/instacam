import React from 'react';
import { withRouter } from 'react-router';

class EditPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      caption: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit () {
    this.props.post.caption = this.state.caption;
    dispatch(this.props.updatePost(this.props.post));
    this.props.closeModal();
  }

  handleCancel () {
    this.props.closeModal();
  }

  handleInput(e) {
    this.setState({ caption: e.currentTarget.value });
  }

  handleDelete() {
    this.props.closeModal();
    this.props.deletePost(this.props.post.id)
      .then(()=> {setTimeout(()=> this.props.history.push('/'), 800);});
  }

  render() {
    return(
      <div className="edit-form">
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Update current caption..." 
                    className="edit-field"
                    value={this.state.caption}
                    onChange={this.handleInput} />
            
          <input className="edit-modal-button" type="submit" value="Update Post"/>
            <div className="edit-modal-sep" />
        </form>
        <button className="delete-show-button" onClick={this.handleDelete} >Delete Photo</button>
        <div className="edit-modal-sep" />
        <button className="modal-button-cancel" onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }

};

export default withRouter(EditPost);