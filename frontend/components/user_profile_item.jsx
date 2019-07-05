import React from 'react';
import { withRouter } from 'react-router';

class UserProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      comments: 0
    };

    this.countLikes = this.countLikes.bind(this);
    this.countComments = this.countComments.bind(this);
  }

  componentDidMount(){
    this.props.fetchLikes()
      .then(() => {
        this.setState({ likes: this.countLikes() }); 
      });
    this.props.fetchComments()
      .then(()=> {
        this.setState({ comments: this.countComments() });
      });
  }

  countLikes(){
    let postLikes = this.props.likes.filter(like => like.post_id === this.props.post.id);
    return postLikes.length;
  }

  countComments(){
    let postComments = this.props.comments.filter(comment => comment.post_id === this.props.post.id);
    return postComments.length;
  }

  render(){
    return(
      <div className="image-container" onClick={() => this.props.history.push(`/posts/${this.props.post.id}`)}>
        <div className="middle">
          <div className="icons-prof">
            <i className="fas fa-heart"></i>
            {this.state.likes}
            <i className="fas fa-comment"></i>
            {this.state.comments}
          </div>
        </div>
        <img className="user-profile-images"
             src={this.props.post.photoUrl} alt="image" />
      </div>
    )
  }
}

export default withRouter(UserProfileItem);