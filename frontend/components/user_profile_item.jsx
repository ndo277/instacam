import React from 'react';
import { withRouter } from 'react-router';

class UserProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };

    this.countLikes = this.countLikes.bind(this);
  }

  componentDidMount(){
    // debugger
    this.setState({likes: this.countLikes()}); 
  }

  countLikes(){
    let postLikes = this.props.likes.filter(like => like.post_id === this.props.post.id);
    return postLikes.length;
  }

  render(){
    return(
      <div className="image-container">
        <div className="middle">
          <div className="icons-prof">
            <i className="fas fa-heart"></i>
            {this.state.likes}
            <i className="fas fa-comment"></i>
          </div>
        </div>
        <img onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}
          className="user-profile-images"
          src={this.props.post.photoUrl} alt="image" />
      </div>
    )
  }
}

export default withRouter(UserProfileItem);