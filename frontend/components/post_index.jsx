import React from 'react';
import PostIndexItemContainer from './post_index_item_container';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLikes();
  }

  render() {
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