import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
      return (
        <div>
          <ul>
            {this.props.posts.map((post) => {
              return <li key={post.id} className="post-index-list">
                <PostIndexItem post={post} currentUser={this.props.currentUser}/>
              </li>
          })}
          </ul>
        </div>
      )
    }
  }

export default PostIndex;