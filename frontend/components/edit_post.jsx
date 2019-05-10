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
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete() {
    dispatch(this.props.closeModal());
    dispatch(this.props.deletePost(this.props.post.id));
  }

  render() {
    return(
      <div className="edit-form">
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Update caption..." 
                    className="edit-field"
                    value={this.state.caption}
                    onChange={this.handleInput} />
            <div className="edit-modal-sep" />
          <input className="edit-modal-button" type="submit" value="Update post"/>
            <div className="edit-modal-sep" />
        </form>
        <button className="delete-show-button" onClick={this.handleDelete} >Delete</button>
        <div className="edit-modal-sep" />
        <button className="edit-modal-button" onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }

};

export default EditPost;