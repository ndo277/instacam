import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      followedPosts: null
    };

    this.getUserFolloweesIds = this.getUserFolloweesIds.bind(this);
    this.getUserFolloweesPosts = this.getUserFolloweesPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts()
      .then(() => this.setState({
        followedPosts: this.getUserFolloweesPosts() 
        }));
    this.props.fetchLikes();
  }

  getUserFolloweesPosts() {
    let followeeIds = this.getUserFolloweesIds();
    let followeePosts = this.props.posts.filter(post =>{
      return followeeIds.includes(post.user_id);
    });
    return followeePosts;
  }

  getUserFolloweesIds() {
    let userFolloweesIds = this.props.currentUser.followees.map(flwe => {
      return flwe.id;
    });

    return userFolloweesIds;
  }

  render() {
      debugger;
      return (
        <div>
          <ul>
            {this.props.posts.map((post) => {
              return <li key={post.id} className="post-index-list">
                <PostIndexItemContainer post={post} 
                               currentUser={this.props.currentUser}
                               likes={this.props.likes}/>
              </li>
          })}
          </ul>
        </div>
      )
    }
  }

export default PostIndex;